/* Tests http://docs.gurock.com/testrail-api2/reference-tests */

//http://docs.gurock.com/testrail-api2/reference-tests#get_test
TestRail.prototype.getTest = function(obj) {
    return this.get("get_test/" + obj.test_id);
};

//http://docs.gurock.com/testrail-api2/reference-tests#get_tests
TestRail.prototype.getTests = function(obj) {
    return this.get("get_tests/" + obj.run_id, obj.filters);
};
