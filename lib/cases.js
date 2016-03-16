/* Cases http://docs.gurock.com/testrail-api2/reference-cases */

TestRail.prototype.getCase = function(obj) {
    return this.get("get_case/" + obj.case_id);
};

TestRail.prototype.getCases = function(obj) {
    var path = "get_cases/" + obj.project_id;
    if (typeof obj.suite_id !== undefined) path += "&suite_id=" + obj.suite_id;
    if (typeof obj.section_id !== undefined) path += "&section_id=" + obj.section_id;
    return this.get(path);
};

TestRail.prototype.addCase = function(obj) {
    var path = "add_case/" + obj.section_id;
    return this.post(path,obj);
};
