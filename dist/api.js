'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.auth = exports.getUserRepos = exports.getOrgRepos = undefined;

let getOrgRepos = exports.getOrgRepos = (() => {
    var _ref = _asyncToGenerator(function* (org, opts) {
        if (!org) {
            Promise.reject(constants.noRepos);
            return;
        }
        return yield (0, _http.get)(`https://api.github.com/orgs/${org}/repos?${(0, _qs.stringify)(opts)}`);
    });

    return function getOrgRepos(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

let getUserRepos = exports.getUserRepos = (() => {
    var _ref2 = _asyncToGenerator(function* (user, opts) {
        if (!user) {
            Promise.reject(constants.noRepos);
            return;
        }
        return yield (0, _http.get)(`https://api.github.com/users/${user}/repos?${(0, _qs.stringify)(opts)}`);
    });

    return function getUserRepos(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
})();

let auth = exports.auth = (() => {
    var _ref3 = _asyncToGenerator(function* (user, pass) {
        if (!user) {
            Promise.reject(constants.invalidUser);
            return;
        }
        if (!pass) {
            Promise.reject(constants.invalidPass);
            return;
        }
        return yield (0, _http.get)('https://api.github.com/user', { user, pass });
    });

    return function auth(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
})();

var _qs = require('qs');

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

var _http = require('./http');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // Thanks to: https://api.github.com