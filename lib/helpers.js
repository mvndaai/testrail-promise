/* Helper Functions:
* These let me use the api to make life easier
*/
var Promise = require("bluebird");

TestRail.prototype.promise = function(value){
    return Promise.delay(0).then(function(){ return value; });
};

var findInJsonArray = function(jsonArray,matchPart,matcher,returnPart){
    for(var i = 0; i < jsonArray.length; i++){
        if (jsonArray[i][matchPart] === matcher) {
            return jsonArray[i][returnPart];
        }
    }
    return null;
};

var statusIdByName = function(text){
    switch(text.toLowerCase()){
        case 'passed': return 1;
        case 'blocked': return 2;
        case 'untested': return 3;
        case 'retest': return 4;
        case 'failed': return 5;
    }
};

TestRail.prototype.getCaseTypeIdByName = function(name){
    return this.getCaseTypes().then(function(json){
        for(var i = 0; i < json.length; i++){
            if (json[i].name.toLowerCase() === name.toLowerCase()) {
                return json[i].id;
            }
        }
    });
};

TestRail.prototype.getCaseIdByTitle = function(obj) {
    if(obj.case_id) return this.promise(obj.case_id);
    return this.getCases(obj).then(function(json){
        return findInJsonArray(json,"title",obj.title,"id");
    });
};

TestRail.prototype.getMilestoneIdByName = function(obj) {
    if(obj.milestone_id) return this.promise(obj.milestone_id);
    return this.getSections(obj).then(function(json){
        return findInJsonArray(json,"name",obj.milestone_name,"id");
    });
};

TestRail.prototype.getPlanIdByName = function(obj) {
    if(obj.plan_id) return this.promise(obj.plan_id);
    return this.getPlans(obj).then(function(json){
        return findInJsonArray(json,"name",obj.plan_name,"id");
    });
};

TestRail.prototype.getProjectIdByName = function(obj) {
    if(obj.project_id) return this.promise(obj.project_id);
    return this.getProjects().then(function(json){
        return findInJsonArray(json,"name",obj.project_name,"id");
    });
};

TestRail.prototype.getSectionIdByName = function(obj) {
    if(obj.section_id) return this.promise(obj.section_id);
    return this.getSections(obj).then(function(json){
        return findInJsonArray(json,"name",obj.section_name,"id");
    });
};

TestRail.prototype.getSuiteIdByName = function(obj) {
    if(obj.suite_id) return this.promise(obj.suite_id);
    return this.getSuites(obj).then(function(json){
        return findInJsonArray(json,"name",obj.suite_name,"id");
    });
};

TestRail.prototype.getSuiteIdByCase = function (obj) {
  var tr = this;
  return tr.getCase(obj).then(function (json) {
    return json.suite_id;
  });
};

TestRail.prototype.getRunIdByName = function (obj) {
  var tr = this;
  if (obj.run_id) return tr.promise(obj.run_id);
  return tr.getRuns(obj).then(function (json) {
    return findInJsonArray(json, "name", obj.name, "id");
  });
};

TestRail.prototype.getLatestRunInPlan = function(obj) {
    var tr = this;
    if(obj.run_id) return tr.promise(obj.run_id);
    return tr.getPlanIdByName(obj)
        .then(function(plan_id){obj.plan_id = plan_id; })
        .then(function(){
            return tr.getPlan(obj).then(function (plans){
                if (plans.error !== undefined) return plans.error;
                if (plans.entries === undefined) return plans;
                var plan = plans.entries.pop();
                if (plan.runs === undefined) return plan;
                var run = plan.runs.pop();
                return run.id;
            });
        });
};

TestRail.prototype.ifNeededAddThenGetCaseId = function(obj) {
    var tr = this;
    return this.getCaseIdByTitle(obj).then(function(foundId){
        if (foundId !== null) return foundId;
        return tr.addCase(obj).then(function(newCase){ return newCase.id; });
    });
};

TestRail.prototype.ifNeededAddThenGetRunId = function (obj) {
  var tr = this;
  return tr.getSuiteIdByCase(obj)
      .then(function (suite_id) {
        obj.suite_id = suite_id;
        return tr.getRunIdByName(obj).then(function (run_id) {
          if (run_id !== null) return run_id;
          return tr.addRun(obj).then(function (newRun) {
            return newRun.id;
          });
        });
      });
};

TestRail.prototype.addResultForCaseByRunNameAndCaseId = function (obj) {
  var tr = this;
  return tr.getProjectIdByName(obj).then(function (project_id) {
    obj.project_id = project_id;
    return tr.ifNeededAddThenGetRunId(obj).then(function (run_id) {
      obj.run_id = run_id;
      return tr.addResultForCase(obj);
    });
  });
};

TestRail.prototype.ifNeededCreateThenAddResultForCase = function(obj) {
    if(!obj.estimate) obj.estimate = "";
    if(!obj.refs) obj.refs = "";
    if(!obj.type_id) obj.type_id = 3; //Automated
    if(!obj.suite_name) obj.suite_name = "Master";
    if(obj.status_name) obj.status_id = statusIdByName(obj.status_name);
    var tr = this;
    return tr.getProjectIdByName(obj)
      .then(function(project_id){
        obj.project_id = project_id;
        return tr.getSuiteIdByName(obj);
      })
      .then(function(suite_id){
        obj.suite_id = suite_id;
        var s,p;
        s = tr.getSectionIdByName(obj)
            .then(function(section_id){obj.section_id = section_id; });
        if (!obj.run_id){
            p = tr.getLatestRunInPlan(obj)
                .then(function(run_id){ obj.run_id = run_id ;});
        }
        return Promise.all([s,p]);
      })
      .then(function(){
        return tr.ifNeededAddThenGetCaseId(obj);
      })
      .then(function(case_id){
        obj.case_id = case_id;
        return tr.addResultForCase(obj);
      })
    ;
};
