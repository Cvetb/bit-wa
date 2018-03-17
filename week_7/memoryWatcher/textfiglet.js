const memoryInfoModule = require('./memoryInfoModule');
const figlet = require('figlet');
const getOutput = function (){
    
    return figlet.textSync(callbackArray, {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })
}
module.exports.getOutput = getOutput;