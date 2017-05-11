'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.warn = warn;
exports.log = log;
exports.error = error;
exports.info = info;
// Thanks: http://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

const colors = {
    blue: '\x1b[44m',
    yellow: '\x1b[33m',
    gray: '\x1b[46m',
    red: '\x1b[41m'
};

const print = color => (...args) => console.log.apply(console, [color, ...args]);

function warn(...args) {
    return print(colors.yellow)(...args);
}

function log(...args) {
    return print(colors.blue)(...args);
}

function error(...args) {
    return print(colors.red)(...args);
}

function info(...args) {
    return print('')(...args);
}