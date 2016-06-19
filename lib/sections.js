/* Sections http://docs.gurock.com/testrail-api2/reference-sections */

//http://docs.gurock.com/testrail-api2/reference-sections#get_section
TestRail.prototype.getSection = function(obj) {
    return this.get("get_section/" + obj.section_id);
};

//http://docs.gurock.com/testrail-api2/reference-sections#get_sections
TestRail.prototype.getSections = function(obj) {
    var url = "get_sections/" + obj.project_id;
    if(obj.suite_id) url += "&suite_id=" + obj.suite_id;
    return this.get(url);
};

//http://docs.gurock.com/testrail-api2/reference-sections#add_section
TestRail.prototype.addSection = function(obj){
    var url = "add_section/" + obj.project_id;
    return this.post(url, obj);
};

//http://docs.gurock.com/testrail-api2/reference-sections#update_section
TestRail.prototype.updateSection = function(obj) {
    return this.post("update_section/" + obj.section_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-sections#delete_section
TestRail.prototype.deleteSection = function(obj) {
    return this.post("delete_section/" + obj.section_id);
};
