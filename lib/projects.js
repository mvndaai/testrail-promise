/* Project http://docs.gurock.com/testrail-api2/reference-projects */

TestRail.prototype.getProject = function(obj) {
    return this.get("get_project/" + obj.project_id);
};

TestRail.prototype.getProjects = function() {
    return this.get("get_projects/");
};
