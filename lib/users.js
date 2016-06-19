/*Users http://docs.gurock.com/testrail-api2/reference-users*/

//http://docs.gurock.com/testrail-api2/reference-users#get_user
TestRail.prototype.getUser = function(obj) {
    return this.get("get_user/" + obj.user_id);
};

//http://docs.gurock.com/testrail-api2/reference-users#get_user_by_email
TestRail.prototype.getUserByEmail = function(obj) {
    return this.get("get_user_by_email&email=" + obj.email);
};

//http://docs.gurock.com/testrail-api2/reference-users#get_users
TestRail.prototype.getUsers = function() {
    return this.get("get_users");
};
