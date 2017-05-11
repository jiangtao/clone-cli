// Thanks: http://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

const colors = {
    blue: '\x1b[44m',
    yellow: '\x1b[33m',
    gray: '\x1b[46m',
    red: '\x1b[41m'
}

const print = color => (...args) => console.log.apply(console, [color, ...args])

export function warn(...args){
    return print(colors.yellow)(...args)
}

export function log(...args){
    return print(colors.blue)(...args)
}

export function error(...args){
    return print(colors.red)(...args)
}

export function info(...args){
    return print('')(...args)
}
