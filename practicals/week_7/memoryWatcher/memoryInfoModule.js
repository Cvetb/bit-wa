const os = require('os');
let callbackArray = [];

const registerForAlerts = (f) => {
    callbackArray.push(f);
}

let intervalId;
const checkMemory = () => {
    intervalId = setInterval(() => {
        let freeMemory = os.freemem() / 1024 / 1024;
        if (freeMemory < 1500) {
            for (let i = 0; i < callbackArray.length; i++) {
                callbackArray[i](`low memory`);
            }
        } else {
            console.log(freeMemory);
        }
    }, 1000);
};

const start = () => {
    checkMemory();
}
const stop = () => {
    clearInterval(intervalId);
}


module.exports.registerForAlerts = registerForAlerts;
module.exports.start = start;
module.exports.stop = stop;