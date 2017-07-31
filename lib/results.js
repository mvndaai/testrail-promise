/* Results
  http://docs.gurock.com/testrail-api2/reference-results
  http://docs.gurock.com/testrail-api2/reference-results-fields
*/

//http://docs.gurock.com/testrail-api2/reference-results#get_results
TestRail.prototype.getResults = function(obj) {
    return this.get("get_results/" + obj.test_id, obj.filters);
};

//http://docs.gurock.com/testrail-api2/reference-results#get_results_for_case
TestRail.prototype.getResultsForCase = function(obj) {
    return this.get("get_results_for_case/" + obj.run_id + "/" + obj.case_id, obj.filters);
};

//http://docs.gurock.com/testrail-api2/reference-results#get_results_for_run
TestRail.prototype.getResultsForRun = function(obj) {
    return this.get("get_results_for_run/" + obj.run_id, obj.filters);
};

//http://docs.gurock.com/testrail-api2/reference-results#add_result
TestRail.prototype.addResult = function(obj) {
    return this.post("add_result/" + obj.test_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-results#add_result_for_case
TestRail.prototype.addResultForCase = function(obj) {
    var path = "add_result_for_case/" + obj.run_id + "/" + obj.case_id;
    return this.post(path,obj);
};

//http://docs.gurock.com/testrail-api2/reference-results#add_results
TestRail.prototype.addResults = function(obj) {
    return this.post("add_results/" + obj.run_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-results#add_results_for_cases
TestRail.prototype.addResultsForCases = function(obj) {
    return this.post("add_results_for_cases/" + obj.run_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-results-fields
TestRail.prototype.getResultFields = function() {
    return this.get("get_result_fields");
};
