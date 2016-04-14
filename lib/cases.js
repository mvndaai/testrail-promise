/* Cases http://docs.gurock.com/testrail-api2/reference-cases */

//http://docs.gurock.com/testrail-api2/reference-cases#get_case
TestRail.prototype.getCase = function(obj) {
    return this.get("get_case/" + obj.case_id);
};

//http://docs.gurock.com/testrail-api2/reference-cases#get_cases
TestRail.prototype.getCases = function(obj) {
    var path = "get_cases/" + obj.project_id;
    if (obj['suite_id']) path += "&suite_id=" + obj.suite_id;
    if (obj['section_id']) path += "&section_id=" + obj.section_id;
    return this.get(path);
};

//http://docs.gurock.com/testrail-api2/reference-cases#add_case
TestRail.prototype.addCase = function(obj) {
    var path = "add_case/" + obj.section_id;
    return this.post(path,obj);
};

//http://docs.gurock.com/testrail-api2/reference-cases#update_case

//http://docs.gurock.com/testrail-api2/reference-cases#delete_case


//http://docs.gurock.com/testrail-api2/reference-cases-fields
TestRail.prototype.getCaseFields = function() {
    return this.get("get_case_fields");
};

//http://docs.gurock.com/testrail-api2/reference-cases-types
TestRail.prototype.getCaseTypes = function() {
    return this.get("get_case_types");
};
