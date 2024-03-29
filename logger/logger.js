const chalk = require('chalk')
const appName = 'NPM Logger'

const log = console.log

function error(message){
    log(chalk.red.bold(`${appName}:${message}`))
}

function warning(message){
    log(chalk.italic.yellow(`${appName}:${message}`))
}

function info(message){
    log(chalk.white(`${appName}:${message}`))
}

function success(message){
    log(chalk.green(`${appName}:${message}`))
}

module.exports ={ 
    error: error,
    warning:warning,
    info:info,
    success:success
}