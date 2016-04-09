var TestRail = require("../lib"), creds = require("../credentials.json");
var tr = new TestRail(creds.url,creds.username,creds.password);
tr.allowUntrustedCertificate();

describe("index", function() {

    it("getFullApiPath", function() {
        expect(tr.getFullApiPath()).toBe(creds.url + "/index.php?/api/v2/");
    });

    it("getStatuses", function(done) {
        tr.getStatuses().then(function(statuses){
            expect(statuses[0].name).toBe("passed");
            done();
        });
    });

});
