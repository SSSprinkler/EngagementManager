
module.exports = {
    APIURL: process.env.ENGAGEMENTGRAPH_APIURL || "https://prod.hardingpoint.com/v9.3/api",
    GATEWAYTOKEN: process.env.ENGAGEMENTGRAPH_GATEWAYTOKEN || "IqfOlY2JJb37JRH7I11pd7zOqbYi5Nw0aOSA8WQl",
    APITOKEN: process.env.ENGAGEMENTGRAPH_APITOKEN || "299123d3ccebfc2178e2664d821e536b7924a2b30562146a5f781112c6e7b95d",
    SAVE: "orchestration/save",
    GET:  "orchestration/get",
    LOGEXCEPTION: "log/exception",
    VERSION: "v9.3",
    URL: "prod.hardingpoint.com",
    CACHEDIR: "./HardingPoint/cache/",
    CACHE: true
}