/* Runs http://docs.gurock.com/testrail-api2/reference-runs */

//http://docs.gurock.com/testrail-api2/reference-runs#get_run
TestRail.prototype.getRun = function(obj) {
    return this.get("get_run/" + obj.run_id);
};

//http://docs.gurock.com/testrail-api2/reference-runs#get_runs
TestRail.prototype.getRuns = function(obj) {
    return this.get("get_runs/" + obj.project_id, obj.filters);
};

//http://docs.gurock.com/testrail-api2/reference-runs#add_run
TestRail.prototype.addRun = function(obj) {
    return this.post("add_run/" + obj.project_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-runs#update_run
TestRail.prototype.updateRun = function(obj) {
    return this.post("update_run/" + obj.run_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-runs#close_run
TestRail.prototype.closeRun = function(obj) {
    return this.post("close_run/" + obj.run_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-runs#delete_run
TestRail.prototype.deleteRun = function(obj) {
    return this.post("delete_run/" + obj.run_id, obj);
};
