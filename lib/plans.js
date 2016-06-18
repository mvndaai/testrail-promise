/* Plans http://docs.gurock.com/testrail-api2/reference-plans */

//http://docs.gurock.com/testrail-api2/reference-plans#get_plan
TestRail.prototype.getPlan = function(obj) {
    return this.get("get_plan/" + obj.plan_id);
};

//http://docs.gurock.com/testrail-api2/reference-plans#get_plans
TestRail.prototype.getPlans = function(obj) {
    return this.get("get_plans/" + obj.project_id);
};

//http://docs.gurock.com/testrail-api2/reference-plans#add_plan

//http://docs.gurock.com/testrail-api2/reference-plans#add_plan_entry

//http://docs.gurock.com/testrail-api2/reference-plans#update_plan

//http://docs.gurock.com/testrail-api2/reference-plans#update_plan_entry

//http://docs.gurock.com/testrail-api2/reference-plans#close_plan

//http://docs.gurock.com/testrail-api2/reference-plans#delete_plan

//http://docs.gurock.com/testrail-api2/reference-plans#delete_plan_entry
