'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _log = require('./log');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (command, options = {}) {
        return new Promise(function (resolve, reject) {
            require('child_process').exec(command, options, function (err, stdout, stderr) {
                if (err) {
                    reject(err);
                    return;
                }

                (0, _log.info)(stderr);
                (0, _log.info)(stdout);

                resolve(command);
            });
        });
    });

    function runBash(_x) {
        return _ref.apply(this, arguments);
    }

    return runBash;
})();