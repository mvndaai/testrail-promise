/* Runs http://docs.gurock.com/testrail-api2/reference-runs */

TestRail.prototype.getRun = function(obj) {
    return this.get("get_run/" + obj.run_id);
};

TestRail.prototype.getRuns = function(obj) {
    return this.get("get_runs/" + obj.project_id);
};

TestRail.prototype.addRun = function(obj) {
    return this.post("add_run/" + obj.project_id, obj);
};

TestRail.prototype.updateRun = function(obj) {
    return this.post("update_run/" + obj.run_id, obj);
};

TestRail.prototype.closeRun = function(obj) {
    return this.post("close_run/" + obj.run_id, obj);
};

TestRail.prototype.deleteRun = function(obj) {
    return this.post("delete_run/" + obj.run_id, obj);
};
