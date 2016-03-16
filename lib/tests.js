/* Tests http://docs.gurock.com/testrail-api2/reference-tests */

TestRail.prototype.getTest = function(obj) {
    return this.get("get_test/" + obj.test_id);
};

TestRail.prototype.getTests = function(obj) {
    return this.get("get_tests/" + obj.run_id);
};
