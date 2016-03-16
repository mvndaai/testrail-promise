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

TestRail.prototype.getSectionIdByName = function(obj) {
    if(obj.hasOwnProperty('section_id')) return promise(obj.section_id);
    return this.getSections(obj).then(function(json){
        return findInJsonArray(json,"name",obj.section_name,"id");
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
    return tr.getProjectIdByName(obj).then(function(project_id){
        obj.project_id = project_id;
        return tr.getSectionIdByName(obj).then(function(section_id){//Needs Project
            obj.section_id = section_id;


            var c = tr.ifNeededAddThenGetCaseId(obj).then(function(id){ obj.case_id = id; }); //Needs "section_id","suite_id","title","type_id,"project_id","estimate","milestone_id","refs"
            console.log(obj);

            return Promise.all([c]).then(function(){
                return tr.addResultForCase(obj);
            });
        });
    });
};
