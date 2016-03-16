/* Plans http://docs.gurock.com/testrail-api2/reference-plans */

TestRail.prototype.getPlan = function(obj) {
    return this.get("get_plan/" + obj.plan_id);
};

TestRail.prototype.getPlans = function(obj) {
    return this.get("get_plans/" + obj.project_id);
};
