/* Project http://docs.gurock.com/testrail-api2/reference-projects */

//http://docs.gurock.com/testrail-api2/reference-projects#get_project
TestRail.prototype.getProject = function(obj) {
    return this.get("get_project/" + obj.project_id);
};

//http://docs.gurock.com/testrail-api2/reference-projects#get_projects
TestRail.prototype.getProjects = function() {
    return this.get("get_projects/");
};

//http://docs.gurock.com/testrail-api2/reference-projects#add_project

//http://docs.gurock.com/testrail-api2/reference-projects#update_project

//http://docs.gurock.com/testrail-api2/reference-projects#delete_project
