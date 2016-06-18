/* Milestones http://docs.gurock.com/testrail-api2/reference-milestones*/

//http://docs.gurock.com/testrail-api2/reference-milestones#get_milestone
TestRail.prototype.getMilestone = function(obj) {
    return this.get("get_milestone/" + obj.milestone_id);
};

//http://docs.gurock.com/testrail-api2/reference-milestones#get_milestones
TestRail.prototype.getMilestones = function(obj) {
    return this.get("get_milestones/" + obj.project_id);
};

//http://docs.gurock.com/testrail-api2/reference-milestones#add_milestone

//http://docs.gurock.com/testrail-api2/reference-milestones#update_milestone

//http://docs.gurock.com/testrail-api2/reference-milestones#delete_milestone
