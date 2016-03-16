/* Milestones http://docs.gurock.com/testrail-api2/reference-milestones*/

TestRail.prototype.getMilestone = function(obj) {
    return this.get("get_milestone/" + obj.milestone_id);
};

TestRail.prototype.getMilestones = function(obj) {
    return this.get("get_milestones/" + obj.project_id);
};
