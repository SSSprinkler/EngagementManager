/**
 * Copyright 2017 Harding Point
 *
 *  Contact Support@HardingPoint.com
 *
 *  https://www.hardingpoint.com/
 *  https://github.com/HardingPoint
 *
 **/

module.exports = {
    APIURL: process.env.ENGAGEMENTMANAGER_APIURL || process.env.ENGAGEMENTGRAPH_APIURL || "https://prod.hardingpoint.com/v9.3/api",
    GATEWAYTOKEN: process.env.ENGAGEMENTMANAGER_GATEWAYTOKEN || process.env.ENGAGEMENTGRAPH_GATEWAYTOKEN,
    APITOKEN: process.env.ENGAGEMENTMANAGER_APITOKEN || process.env.ENGAGEMENTGRAPH_APITOKEN,
    SAVE: "orchestration/save",
    GET:  "orchestration/get",
    LOGEXCEPTION: "log/exception",
    VERSION: process.env.ENGAGEMENTMANAGER_APIVERSION || "v9.3",
    URL: process.env.ENGAGEMENTMANAGER_URL || "prod.hardingpoint.com",
    CACHEDIR: process.env.ENGAGEMENTMANAGER_CACHE_DIR || "./HardingPoint/cache/",
    CACHE: process.env.ENGAGEMENTMANAGER_CACHE_ENABLED || "true"
}