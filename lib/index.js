/* http://docs.gurock.com/testrail-api2/start */
var rp = require('request-promise');

module.exports = TestRail = function(host, user, password) {
    this.host = host + "/index.php?/api/v2/";
    this.user = user;
    this.password = password;
    this.rejectUnauthorized = true;
    this.simpleRequestsEnabled = false;
};

["cases","configs","milestones","plans","projects","results","runs",
    "sections","suites","tests","users","helpers"]
    .forEach(function(file){ require("./" + file); });

TestRail.prototype.allowUntrustedCertificate = function(bool){
    if (typeof bool === 'undefined'){ bool = true; }
    this.rejectUnauthorized = !bool;
    return this.promise(!this.rejectUnauthorized);
};

TestRail.prototype.simpleRequests = function(bool){
    if (typeof bool === 'undefined'){ bool = true; }
    this.simpleRequestsEnabled = bool;
    return this.promise(this.simpleRequestsEnabled);
};

TestRail.prototype.getFullApiPath = function() {
    return this.promise(this.host);
};

TestRail.prototype.get = function(url, filters) {
    if (filters && typeof filters === 'object'){
        for (var key in filters){
            url += '&' + key + '=' + filters[key];
        }
    }
    var options = {
        simple: this.simpleRequestsEnabled,
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
        simple: this.simpleRequestsEnabled,
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

//http://docs.gurock.com/testrail-api2/reference-templates
TestRail.prototype.getTemplates = function(obj) {
    return this.get("get_templates/" + obj.project_id);
};
