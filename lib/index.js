/* http://docs.gurock.com/testrail-api2/start */
var rp = require('request-promise');

module.exports = TestRail = function(host, user, password) {
    this.host = host + "/index.php?/api/v2/";
    this.user = user;
    this.password = password;
    this.rejectUnauthorized = true;
};

["cases","milestones","plans","projects","results","runs",
    "sections","suites","tests","helpers"]
    .forEach(function(file){ require("./" + file); });

TestRail.prototype.allowUntrustedCertificate = function(){
    this.rejectUnauthorized = false;
};

TestRail.prototype.getFullApiPath = function() {
  return this.host;
};

TestRail.prototype.get = function(url) {
    var options = {
        uri:this.host + url,
        json: true,
        rejectUnauthorized: this.rejectUnauthorized,
        headers: {
            "content-type": "application/json"
        }
    };
    return rp(options).auth(this.user, this.password, true);
};

TestRail.prototype.post = function(url,obj) {
    var options = {
        uri:this.host + url,
        json: true,
        rejectUnauthorized: this.rejectUnauthorized,
        headers: {
            "content-type": "application/json"
        },
        body: obj
    };
    return rp.post(options).auth(this.user, this.password, true);
};

//http://docs.gurock.com/testrail-api2/reference-statuses
TestRail.prototype.getStatuses = function() {
  return this.get("get_statuses/");
};
