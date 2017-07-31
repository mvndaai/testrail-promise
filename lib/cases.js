/* Cases
  http://docs.gurock.com/testrail-api2/reference-cases
  http://docs.gurock.com/testrail-api2/reference-cases-fields
  http://docs.gurock.com/testrail-api2/reference-cases-types
*/

//http://docs.gurock.com/testrail-api2/reference-cases#get_case
TestRail.prototype.getCase = function(obj) {
    return this.get("get_case/" + obj.case_id);
};

//http://docs.gurock.com/testrail-api2/reference-cases#get_cases
TestRail.prototype.getCases = function(obj) {
    var path = "get_cases/" + obj.project_id;

    if (obj.suite_id)       path += "&suite_id="       + obj.suite_id;
    if (obj.section_id)     path += "&section_id="     + obj.section_id;
    if (obj.created_after)  path += "&created_after="  + obj.created_after;
    if (obj.created_before) path += "&created_before=" + obj.created_before;
    if (obj.created_by)     path += "&created_by="     + obj.created_by;
    if (obj.milestone_id)   path += "&milestone_id="   + obj.milestone_id;
    if (obj.priority_id)    path += "&priority_id="    + obj.priority_id;
    if (obj.template_id)    path += "&template_id="    + obj.template_id;
    if (obj.type_id)        path += "&type_id="        + obj.type_id;
    if (obj.updated_after)  path += "&updated_after="  + obj.updated_after;
    if (obj.updated_before) path += "&updated_before=" + obj.updated_before;
    if (obj.updated_by)     path += "&updated_by="     + obj.updated_by;

    return this.get(path, obj.filters);
};

//http://docs.gurock.com/testrail-api2/reference-cases#add_case
TestRail.prototype.addCase = function(obj) {
    return this.post("add_case/" + obj.section_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-cases#update_case
TestRail.prototype.updateCase = function(obj) {
    return this.post("update_case/" + obj.case_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-cases#delete_case
TestRail.prototype.deleteCase = function(obj) {
    return this.post("delete_case/" + obj.case_id);
};

//http://docs.gurock.com/testrail-api2/reference-cases-fields
TestRail.prototype.getCaseFields = function() {
    return this.get("get_case_fields");
};

//http://docs.gurock.com/testrail-api2/reference-cases-types
TestRail.prototype.getCaseTypes = function() {
    return this.get("get_case_types");
};
