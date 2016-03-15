(function() {
    //http://docs.gurock.com/testrail-api2/start
    var rp = require('request-promise');
    var Promise = require("bluebird");
    var API_PATH = "/index.php?/api/v2/";
    var TR;

    var TestRail = function(host, user, password) {
        TR = this;
        this.host = host + API_PATH;
        this.user = user;
        this.password = password;
        this.rejectUnauthorized = true;
    };

    TestRail.prototype.allowUntrustedCertificate = function(){
        this.rejectUnauthorized = false;
    };

    TestRail.prototype.getFullApiPath = function() {
      return this.host;
    };

    TestRail.prototype.get = function(url) {
        var options = {
            uri:this.host + url,
            json: true,
            rejectUnauthorized: this.rejectUnauthorized,
            headers: {
                "content-type": "application/json"
            }
        };
        return rp(options).auth(this.user, this.password, true);
    };

    TestRail.prototype.post = function(url,obj) {
        var options = {
            uri:this.host + url,
            json: true,
            rejectUnauthorized: this.rejectUnauthorized,
            headers: {
                "content-type": "application/json"
            },
            body: obj
        };
        return rp.post(options).auth(this.user, this.password, true);
    };

    TestRail.prototype.getStatuses = function() {
      return this.get("get_statuses/");
    };

    /* Cases
    * http://docs.gurock.com/testrail-api2/reference-cases
    */
    TestRail.prototype.getCase = function(obj) {
        return this.get("get_case/" + obj.case_id);
    };

    TestRail.prototype.getCases = function(obj) {
        var path = "get_cases/" + obj.project_id;
        if (typeof obj.suite_id !== undefined) path += "&suite_id=" + obj.suite_id;
        if (typeof obj.section_id !== undefined) path += "&section_id=" + obj.section_id;
        return this.get(path);
    };

    TestRail.prototype.addCase = function(obj) {
        var path = "add_case/" + obj.section_id;
        return this.post(path,obj);
    };

    /* Plans
    * http://docs.gurock.com/testrail-api2/reference-plans
    */
    TestRail.prototype.getPlan = function(obj) {
        return this.get("get_plan/" + obj.plan_id);
    };

    TestRail.prototype.getPlans = function(obj) {
        return this.get("get_plans/" + obj.project_id);
    };


    /* Project
    * http://docs.gurock.com/testrail-api2/reference-projects
    */
    TestRail.prototype.getProject = function(obj) {
        return this.get("get_project/" + obj.project_id);
    };

    TestRail.prototype.getProjects = function() {
        return this.get("get_projects/");
    };

    /* Results
    * http://docs.gurock.com/testrail-api2/reference-results
    */
    TestRail.prototype.addResultForCase = function(obj) {
        var path = "add_result_for_case/" + obj.run_id + "/" + obj.case_id;
        return this.post(path,obj);
    };

    /* Runs
    * http://docs.gurock.com/testrail-api2/reference-runs
    */
    TestRail.prototype.getRun = function(obj) {
        return this.get("get_run/" + obj.run_id);
    };

    TestRail.prototype.getRuns = function(obj) {
        return this.get("get_runs/" + obj.project_id);
    };

    /* Tests
    * http://docs.gurock.com/testrail-api2/reference-tests
    */
    TestRail.prototype.getTest = function(obj) {
        return this.get("get_test/" + obj.test_id);
    };

    TestRail.prototype.getTests = function(obj) {
        return this.get("get_tests/" + obj.run_id);
    };

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
        return this.getCaseIdByTitle(obj).then(function(foundId){
            if (foundId !== null) return foundId;
            return TR.addCase(obj).then(function(newCase){ return newCase.id; });
        });
    };

    TestRail.prototype.ifNeededCreateThenAddResultForCase = function(obj) {
        return this.ifNeededAddThenGetCaseId(obj).then(function(case_id){
            obj.case_id = case_id;
            return TR.addResultForCase(obj);
        });
    };

    module.exports = TestRail;
}());
