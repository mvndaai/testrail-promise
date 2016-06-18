/*Suites http://docs.gurock.com/testrail-api2/reference-suites*/

//http://docs.gurock.com/testrail-api2/reference-suites#get_suite
TestRail.prototype.getSuite = function(obj) {
    return this.get("get_suite/" + obj.suite_id);
};

//http://docs.gurock.com/testrail-api2/reference-suites#get_suites
TestRail.prototype.getSuites = function(obj) {
    return this.get("get_suites/" + obj.project_id);
};

//http://docs.gurock.com/testrail-api2/reference-suites#add_suite

//http://docs.gurock.com/testrail-api2/reference-suites#update_suite

//http://docs.gurock.com/testrail-api2/reference-suites#delete_suite
