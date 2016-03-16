/* Results http://docs.gurock.com/testrail-api2/reference-results */

TestRail.prototype.addResultForCase = function(obj) {
    var path = "add_result_for_case/" + obj.run_id + "/" + obj.case_id;
    return this.post(path,obj);
};

//http://docs.gurock.com/testrail-api2/reference-results-fields
TestRail.prototype.getResultFields = function() {
    return this.get("get_result_fields");
};
