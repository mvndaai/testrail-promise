/* Helper Functions:
* These let me use the api to make life easier
*/
var Promise = require("bluebird");

var promise = function(value){
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

TestRail.prototype.caseTypeIdByName = function(name){
    return this.getCaseTypes().then(function(json){
        for(var i = 0; i < json.length; i++){
            if (json[i].name.toLowerCase() === name.toLowerCase()) {
                return json[i].id;
            }
        }
    });
};

TestRail.prototype.getProjectIdByName = function(obj) {
    if(obj.hasOwnProperty('project_id')) return promise(obj.project_id);
    return this.getProjects().then(function(json){
        return findInJsonArray(json,"name",obj.project_name,"id");
    });
};

TestRail.prototype.getCaseIdByTitle = function(obj) {
    if(obj.hasOwnProperty('case_id')) return promise(obj.case_id);
    return this.getCases(obj).then(function(json){
        return findInJsonArray(json,"title",obj.title,"id");
    });
};

TestRail.prototype.getMilestoneIdByName = function(obj) {
    if(obj.hasOwnProperty('milestone_id')) return promise(obj.milestone_id);
    return this.getSections(obj).then(function(json){
        return findInJsonArray(json,"name",obj.milestone_name,"id");
    });
};

TestRail.prototype.getSectionIdByName = function(obj) {
    if(obj.hasOwnProperty('section_id')) return promise(obj.section_id);
    return this.getSections(obj).then(function(json){
        return findInJsonArray(json,"name",obj.section_name,"id");
    });
};

TestRail.prototype.getSuiteIdByName = function(obj) {
    if(obj.hasOwnProperty('suite_id')) return promise(obj.suite_id);
    return this.getSuites(obj).then(function(json){
        return findInJsonArray(json,"name",obj.suite_name,"id");
    });
};

TestRail.prototype.ifNeededAddThenGetCaseId = function(obj) {
    var tr = this;
    return this.getCaseIdByTitle(obj).then(function(foundId){
        if (foundId !== null) return foundId;
        return tr.addCase(obj).then(function(newCase){ return newCase.id; });
    });
};

TestRail.prototype.ifNeededCreateThenAddResultForCase = function(obj) {
    var tr = this;
    if(!obj.hasOwnProperty('estimate')) obj.estimate = "";
    if(!obj.hasOwnProperty('refs')) obj.refs = "";
    if(!obj.hasOwnProperty('type_id')) obj.type_id = 3; //Automated
    if(!obj.hasOwnProperty('suite_name')) obj.suite_name = "Master";

    return tr.getProjectIdByName(obj).then(function(project_id){
        obj.project_id = project_id;
        var se = tr.getSectionIdByName(obj) //Needs Project
            .then(function(section_id){obj.section_id = section_id; });
        var su = tr.getSuiteIdByName(obj) //Needs Project
            .then(function(suite_id){obj.suite_id = suite_id; });
        var m = tr.getMilestoneIdByName(obj) //Needs Project
            .then(function(milestone_id){ obj.milestone_id = milestone_id ; });

        return Promise.all([m,se,su]).then(function(){
            return tr.ifNeededAddThenGetCaseId(obj) //Needs "section_id","suite_id","title","type_id,"project_id","estimate","milestone_id","refs"
                .then(function(case_id){ obj.case_id = case_id; console.log(obj); })
                .then(function(){ return tr.addResultForCase(obj);
            });
        });
    });
};
