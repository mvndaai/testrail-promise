var TestRail = require("../lib"), creds = require("../credentials.json");
var tr = new TestRail(creds.url,creds.username,creds.password);

describe("index", function() {

    it("getFullApiPath", function() {
        expect(tr.getFullApiPath()).toBe(creds.url + "/index.php?/api/v2/");
    });
    
});
