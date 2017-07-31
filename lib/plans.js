/* Plans http://docs.gurock.com/testrail-api2/reference-plans */

//http://docs.gurock.com/testrail-api2/reference-plans#get_plan
TestRail.prototype.getPlan = function(obj) {
    return this.get("get_plan/" + obj.plan_id);
};

//http://docs.gurock.com/testrail-api2/reference-plans#get_plans
TestRail.prototype.getPlans = function(obj) {
    return this.get("get_plans/" + obj.project_id, obj.filters);
};

//http://docs.gurock.com/testrail-api2/reference-plans#add_plan
TestRail.prototype.addPlan = function(obj) {
    return this.post("add_plan/" + obj.project_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-plans#add_plan_entry
TestRail.prototype.addPlanEntry = function(obj) {
    return this.post("add_plan_entry/" + obj.plan_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-plans#update_plan
TestRail.prototype.updatePlan = function(obj) {
    return this.post("update_plan/" + obj.plan_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-plans#update_plan_entry
TestRail.prototype.updatePlanEntry = function(obj) {
    var path = "update_plan_entry/" + obj.plan_id + "/" + obj.entry_id;
    return this.post(path, obj);
};

//http://docs.gurock.com/testrail-api2/reference-plans#close_plan
TestRail.prototype.closePlan = function(obj) {
    return this.post("close_plan/" + obj.plan_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-plans#delete_plan
TestRail.prototype.deletePlan = function(obj) {
    return this.post("delete_plan/" + obj.plan_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-plans#delete_plan_entry
TestRail.prototype.deletePlanEntry = function(obj) {
    var path = "update_plan_entry/" + obj.plan_id + "/" + obj.entry_id;
    return this.post(path, obj);
};
