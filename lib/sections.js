/* Sections http://docs.gurock.com/testrail-api2/reference-sections */


TestRail.prototype.getSection = function(obj) {
    return this.get("get_section/" + obj.section_id);
};

TestRail.prototype.getSections = function(obj) {
    var url = "get_sections/" + obj.project_id;
    if(obj.hasOwnProperty('suite_id')) url += "&suite_id=" + obj.suite_id;
    return this.get(url);
};
