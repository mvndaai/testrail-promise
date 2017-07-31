/* Milestones http://docs.gurock.com/testrail-api2/reference-milestones*/

//http://docs.gurock.com/testrail-api2/reference-milestones#get_milestone
TestRail.prototype.getMilestone = function(obj) {
    return this.get("get_milestone/" + obj.milestone_id);
};

//http://docs.gurock.com/testrail-api2/reference-milestones#get_milestones
TestRail.prototype.getMilestones = function(obj) {
    return this.get("get_milestones/" + obj.project_id, obj.filters);
};

//http://docs.gurock.com/testrail-api2/reference-milestones#add_milestone
TestRail.prototype.addMilestone = function(obj) {
    return this.post("add_milestone/" + obj.project_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-milestones#update_milestone
TestRail.prototype.updateMilestone = function(obj) {
    return this.post("update_milestone/" + obj.milestone_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-milestones#delete_milestone
TestRail.prototype.deleteMilestone = function(obj) {
    return this.post("delete_milestone/" + obj.milestone_id);
};
