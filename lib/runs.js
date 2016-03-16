/* Runs http://docs.gurock.com/testrail-api2/reference-runs */

TestRail.prototype.getRun = function(obj) {
    return this.get("get_run/" + obj.run_id);
};

TestRail.prototype.getRuns = function(obj) {
    return this.get("get_runs/" + obj.project_id);
};
