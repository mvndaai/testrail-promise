/* Helper Functions:
* These let me use the api to make life easier
*/
var findInJsonArray = function(jsonArray,matchPart,matcher,returnPart){
    for(var i = 0; i < jsonArray.length; i++){
        if (jsonArray[i][matchPart] === matcher) {
            return jsonArray[i][returnPart];
        }
    }
    return null;
};

var promise = function(value){
    return Promise.delay(0).then(function(){ return value; });
};

TestRail.prototype.getProjectIdByName = function(obj) {
    if(obj.hasOwnProperty('project_id')) return promise(obj.project_id);
    return this.getProjects.then(function(json){
        return findInJsonArray(json,"name",obj.project_name,"id");
    });
};

TestRail.prototype.getCaseIdByTitle = function(obj) {
    if(obj.hasOwnProperty('case_id')) return promise(obj.case_id);
    return this.getCases(obj).then(function(json){
        return findInJsonArray(json,"title",obj.title,"id");
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
    return this.ifNeededAddThenGetCaseId(obj).then(function(case_id){
        obj.case_id = case_id;
        return tr.addResultForCase(obj);
    });
};
