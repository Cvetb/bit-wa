const memoryInfoModule = require('./memoryInfoModule');

 memoryInfoModule.registerForAlerts((message) => {
    console.log(message);
});
memoryInfoModule.start();

setTimeout (() => {memoryInfoModule.stop()}
, 10000);

