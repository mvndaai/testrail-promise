var TestRail = require("../lib"), creds = require("../credentials.json");
var tr = new TestRail(creds.url,creds.username,creds.password);
tr.allowUntrustedCertificate();

describe("helpers", function() {

    it("getCaseIdByTitle - id", function(done) {
        var obj = {case_id:1};
        tr.getCaseIdByTitle(obj).then(function(id){
            expect(id).toBe(obj.case_id);
            done();
        });
    });

    it("getMilestoneIdByName - id", function(done) {
        var obj = {milestone_id:1};
        tr.getMilestoneIdByName(obj).then(function(id){
            expect(id).toBe(obj.milestone_id);
            done();
        });
    });

    it("getPlanIdByName - id", function(done) {
        var obj = {plan_id:1};
        tr.getPlanIdByName(obj).then(function(id){
            expect(id).toBe(obj.plan_id);
            done();
        });
    });

    it("getProjectIdByName", function(done) {
        var obj = {project_name:creds.project_name};
        tr.getProjectIdByName(obj).then(function(id){
            expect(id).toBe(creds.project_id);
            done();
        });
    });

    it("getProjectIdByName - id", function(done) {
        var obj = {project_id:1};
        tr.getProjectIdByName(obj).then(function(id){
            expect(id).toBe(obj.project_id);
            done();
        });
    });

    it("getProjectIdByName - id", function(done) {
        var obj = {project_id:1};
        tr.getProjectIdByName(obj).then(function(id){
            expect(id).toBe(obj.project_id);
            done();
        });
    });

    it("getSectionIdByName - id", function(done) {
        var obj = {section_id:1};
        tr.getSectionIdByName(obj).then(function(id){
            expect(id).toBe(obj.section_id);
            done();
        });
    });

    it("getSuiteIdByName - id", function(done) {
        var obj = {suite_id:1};
        tr.getSuiteIdByName(obj).then(function(id){
            expect(id).toBe(obj.suite_id);
            done();
        });
    });
});
