
var HardingPointAPI = require("../HardingPointAPI.js");

var filename = "Sample.json";
var FileData = "{\"now\":\"" + Date.now().toString() + "\"}";

console.log("Before: " + FileData);
HardingPointAPI.savefile(filename,FileData,function(error,data){
    console.log("Filedata: " + data);
});
