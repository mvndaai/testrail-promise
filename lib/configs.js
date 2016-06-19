/*http://docs.gurock.com/testrail-api2/reference-configs*/

//http://docs.gurock.com/testrail-api2/reference-configs#get_configs
TestRail.prototype.getConfigs = function(obj) { //TODO test
    return this.get("get_configs/" + obj.project_id);
};

//http://docs.gurock.com/testrail-api2/reference-configs#add_config_group
TestRail.prototype.addConfigGroup = function(obj) { //TODO test
    return this.post("add_config_group/" + obj.project_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-configs#add_config
TestRail.prototype.addConfig = function(obj) { //TODO test
    return this.post("add_config/" + obj.config_group_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-configs#update_config_group
TestRail.prototype.updateConfigGroup = function(obj) { //TODO test
    return this.post("update_config_group/" + obj.config_group_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-configs#update_config
TestRail.prototype.updateConfig = function(obj) { //TODO test
    return this.post("update_config/" + obj.config_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-configs#delete_config_group
TestRail.prototype.deleteConfigGroup = function(obj) { //TODO test
    return this.post("delete_config_group/" + obj.config_group_id, obj);
};

//http://docs.gurock.com/testrail-api2/reference-configs#delete_config
TestRail.prototype.deleteConfig = function(obj) { //TODO test
    return this.post("delete_config/" + obj.config_id, obj);
};
