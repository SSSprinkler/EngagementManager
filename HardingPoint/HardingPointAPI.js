var https = require('https');

var HardingPointConfig = require("./HardingPointConfig.js");
var debug = require("./debug.js");

const hardingPointAPIGet = HardingPointConfig.APIURL + HardingPointConfig.GET;
const hardingPointAPISave = HardingPointConfig.APIURL + HardingPointConfig.SAVE;

function getHeaders(jsonObject,contenttype){
    var postheaders = {
        'Content-Type' : contenttype,
        'Content-Length' : Buffer.byteLength(jsonObject, 'utf8'),
        'authorizationToken' : HardingPointConfig.APITOKEN,
        'x-api-key' : HardingPointConfig.GATEWAYTOKEN
    };
    return postheaders;
}

function getOptions(path,jsonObject,contenttype){
    var optionspost = {
        host : HardingPointConfig.URL,
        port : 443,
        path : '/' + HardingPointConfig.VERSION + '/api/' + path,
        method : 'POST',
        headers : getHeaders(jsonObject,contenttype)
    };
    return optionspost;
}

var hardingPointAPI = {
    isConnected:function(){
        if (HardingPointConfig.GATEWAYTOKEN && HardingPointConfig.APITOKEN){
            return true;
        }else{
            return false;
        }
    },
    nodered_writeFile:function(path,content,callback){
        if (this.isConnected()){
            var fileName = this.parseFileName(path);
            this.savefile(fileName,content,function(error,data){
                callback(error,data);
            });
        }else{
            callback("Harding Point : Cloud Not Connected","");
        }
    },
    nodered_readFile: function(path,callback){
        if (this.isConnected()){
            var fileName = this.parseFileName(path);
            this.getfile(fileName, function(error,data){
                callback(error, data);
            });
        }else{
            callback("Harding Point : Cloud Not Connected","");
        }
    },
    parseFileName: function (path){
        if (path){
            var filenameSplit = path.split("/");
            var filename = filenameSplit[filenameSplit.length-1];
            if (filename.substring(0,1)=='.'){
                filename = filename.substring(1,filename.length);
            }
            return filename;
        }else{
            return "";
        }},
    getfile: function(filename,callback){
        var jsonObject = "{\"filename\":\"" + filename + "\"}";
        console.log("getfile: " + filename);
        var optionspost = getOptions(HardingPointConfig.GET,jsonObject,'application/json');
        var reqPost = https.request(optionspost, function(res) {
            // console.log('statusCode:', res.statusCode);
            // console.log('headers:', res.headers);
            var str = '';
            res.on('data', function(d) {
                str+=d;
            });
            res.on('end', function () {
                var response = JSON.parse(str);
                if (response.Body){
                    var buffer = new Buffer(response.Body.data);
                    callback("", buffer.toString());
                }else{
                    callback("File Empty (" + filename + ")", "");
                }
            });
        });
        reqPost.on('error', function(e) {
            callback(e, "");
        });
        reqPost.write(jsonObject);
        reqPost.end();
    },
    savefile: function(filename, filedata, callback){
        var jsonObject = "{\"filename\":\"" + this.parseFileName(filename) + "\",\"filedata\":\"" + JSON.stringify(filedata).replace(/(")/g, "\\\"") + "\"}";
        var optionspost = getOptions(HardingPointConfig.SAVE,jsonObject,'application/json');
        // console.log("savefile: " + jsonObject);
        debug.write("SaveFile", "Filename: " + filename);
        var reqPost = https.request(optionspost, function(res) {
            // console.log('statusCode:', res.statusCode);
            // console.log('headers:', res.headers);
            var str = '';
            res.on('data', function(d) {
                str+=d;
            });
            res.on('end', function () {
                if (callback){
                    callback("", str);
                }
            });
        });
        reqPost.on('error', function(e) {
            console.log('Error: ' + e);
            callback(e, "");
        });
        reqPost.write(jsonObject);
        reqPost.end();
    }
};

module.exports = hardingPointAPI;

/*
function callGetFile(){
    jsonObject = JSON.stringify({
        "message" : "The web of things is approaching, let do some tests to be ready!",
        "name" : "Test message posted with node.js",
        "caption" : "Some tests with node.js",
        "link" : "http://www.youscada.com",
        "description" : "this is a description",
        "picture" : "http://youscada.com/wp-content/uploads/2012/05/logo2.png",
        "actions" : [ {
            "name" : "youSCADA",
            "link" : "http://www.youscada.com"
        } ]
    });

    // prepare the header
    var postheaders = {
        'Content-Type' : 'application/json',
        'Content-Length' : Buffer.byteLength(jsonObject, 'utf8'),
        'authorizationToken' : HardingPointConfig.APITOKEN,
        'x-api-key' : HardingPointConfig.GATEWAYTOKEN
    };

    // the post options
    var optionspost = {
        host : 'prod.hardingpoint.com',
        port : 443,
        path : '/v9.3/api/orchestration/get',
        method : 'POST',
        headers : postheaders
    };

    try{
        var reqPost = https.request(optionspost, function(error,data) {
            if (error){
                console.log("Error: " + error);
            }else{
                console.log("data: " + data);
            }
        });
    }catch(ex){
        console.log("EXCEPTION!");
    }
}
*/