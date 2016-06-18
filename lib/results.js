/* Results
  http://docs.gurock.com/testrail-api2/reference-results
  http://docs.gurock.com/testrail-api2/reference-results-fields
*/

//http://docs.gurock.com/testrail-api2/reference-results#get_results

//http://docs.gurock.com/testrail-api2/reference-results#get_results_for_case
TestRail.prototype.addResultForCase = function(obj) {
    var path = "add_result_for_case/" + obj.run_id + "/" + obj.case_id;
    return this.post(path,obj);
};

//http://docs.gurock.com/testrail-api2/reference-results#get_results_for_run

//http://docs.gurock.com/testrail-api2/reference-results#add_result

//http://docs.gurock.com/testrail-api2/reference-results#add_result_for_case

//http://docs.gurock.com/testrail-api2/reference-results#add_results

//http://docs.gurock.com/testrail-api2/reference-results#add_results_for_cases

//http://docs.gurock.com/testrail-api2/reference-results-fields
TestRail.prototype.getResultFields = function() {
    return this.get("get_result_fields");
};
