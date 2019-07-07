
if(process.env.NODE_ENV === 'production'){
    //for production phase
    module.exports = require('./config_production')
}else if(process.env.NODE_ENV === 'deployment'){
    module.exports = require('./config_deploy')
}