const figlet = require('figlet');
const getOutput = function (){
    
    return figlet.textSync('BIT', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })
}
module.exports.getOutput = getOutput;