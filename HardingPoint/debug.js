
const WriteToConsole = true;

// Extremely Simple Debug Handler

exports.write = function(source,output,err){
    writeoutput(source,output,err);
};

function writeoutput(source,output,err){
    var ourputString = "";
    var outputFlag = WriteToConsole;
    if (source) ourputString = source + " : ";
    if (output) ourputString += output;
    if (err){
        outputFlag = true;
        ourputString += " ";
        ourputString += err;
    }
    if (outputFlag) console.log("Harding Point (Debug) : " + ourputString);
};


exports.outputiferror = function(source,output,err){
    if(err){
        writeoutput(source,output,err);
    }
};