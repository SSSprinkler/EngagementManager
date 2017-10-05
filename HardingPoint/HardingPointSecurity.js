
var debug = require("./debug.js");
var when = require("when");
var SHA256 = require("crypto-js/sha256");
var config = require("./HardingPointConfig");

var HardingPointSecurity = module.exports = {
    // This is a global admin user
    AdminUser: process.env.ENGAGEMENTGRAPH_ADMINUSER || "admin",
    AdminPwd: process.env.ENGAGEMENTGRAPH_ADMINPWD || config.APITOKEN, // Unique Per Customer
    SecureSalt: config.GATEWAYTOKEN // Gateway Token Is Unique Per Customer Used as Private Key,
};

function GenerateHash(unsecure){
    return SHA256(unsecure + HardingPointSecurity.SecureSalt).toString();
};

// We need to change this to Authenticate from the cloud for access.
HardingPointSecurity.adminAuth = {
    type: "credentials",
    users: function(username) {
        if (HardingPointSecurity.AdminUser == username) {
            debug.write("HardingPointSettings.users", "Setting Admin Permissions : " + username);
            return when.resolve({username:username,permissions:"*"});
        } else {
            if (username.toLowerCase()=="readonly"){
                debug.write("HardingPointSettings.users", "Read Only Permissions: " + username);
                return when.resolve({username:username,permissions:"read"});
            }
            else{
                debug.write("HardingPointSettings.users", "No Permissions: " + username);
                return when.resolve(null);
            }
        }
    },
    // Global Override if Needed
    //default: {
    //    permissions: "read"
    //},
    authenticate: function(username, password) {
        try{
            if (HardingPointSecurity.AdminUser == username &&
                HardingPointSecurity.AdminPwd == password) {
                debug.write("HardingPointSettings.authenticate", "Setting Admin Permissions: " + username);
                // debug.write("HardingPointSettings.authenticate", "Secure Hash: " + GenerateHash(password));
                return when.resolve({username:username,permissions:"*"});
            } else {
                if (username.toLowerCase()=="readonly" && password.toLowerCase()=="readonly"){
                    debug.write("HardingPointSettings.authenticate", "Read Only Permissions: " + username);
                    return when.resolve({username:username,permissions:"read"});
                }
                else{
                    debug.write("HardingPointSettings.authenticate", "No Permissions: " + username);
                    debug.write("HardingPointSettings.authenticate", HardingPointSecurity.AdminUser + "=" + username);
                    debug.write("HardingPointSettings.authenticate", HardingPointSecurity.AdminPwd + "=" + password);
                    return when.resolve(null);
                }
            }
        }
        catch(e){
            debug.write("HardingPointSettings.authenticate", "EXCEPTION ", e);
        }
    }
};
