
var HardingPointAPI = require("../HardingPointAPI.js");

var filename = "Sample.json";
var FileData = "{\"now\":\"" + Date.now().toString() + "\"}";

var jsonFileData = JSON.parse(FileData);
console.log("Before: " + FileData);
HardingPointAPI.savefile(filename,jsonFileData,function(error,data){
    console.log("Filedata: " + data);
});
