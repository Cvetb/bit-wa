const memoryInfoModule = require('./memoryInfoModule');
const {getOutput} = require('./textfiglet');
 memoryInfoModule.registerForAlerts((message) => {
    console.log(message);
});
// memoryInfoModule.registerForAlerts(onLowMemory);
