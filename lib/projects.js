/* Project http://docs.gurock.com/testrail-api2/reference-projects */

//http://docs.gurock.com/testrail-api2/reference-projects#get_project
TestRail.prototype.getProject = function(obj) {
    return this.get("get_project/" + obj.project_id);
};

//http://docs.gurock.com/testrail-api2/reference-projects#get_projects
TestRail.prototype.getProjects = function(obj) {
    if (obj) { return this.get("get_projects/", obj.filter); }
    return this.get("get_projects/");
};

//http://docs.gurock.com/testrail-api2/reference-projects#add_project
TestRail.prototype.addProject = function(obj) {
    return this.post("add_project", obj);
};

//http://docs.gurock.com/testrail-api2/reference-projects#update_project
TestRail.prototype.updateProject = function(obj) {
    return this.post("update_project/" + obj.project_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-projects#delete_project
TestRail.prototype.deleteProject = function(obj) {
    return this.post("delete_project/" + obj.project_id);
};
