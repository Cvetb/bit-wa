const os = require('os');
let callbackArray;


const intervalId = setInterval(() => {
    const freeMemory = os.freemem() / 1024 / 1024;

    if (freeMemory < 1200) {
        callbackArray(`low memory`);
    console.log(freeMemory);
    }

}, 1000);


const registerForAlerts = (f) => {
    callbackArray = f;
}



module.exports.registerForAlerts = registerForAlerts;

//clearInterval(intervalId);
