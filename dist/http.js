'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = undefined;

let get = exports.get = (() => {
    var _ref = _asyncToGenerator(function* (url, auth) {
        return new Promise(function (resolve, reject) {
            let options = {
                url,
                json: true,
                method: 'GET',
                headers: {
                    'User-Agent': 'jiangtao-git-clone'
                },
                auth
            };

            (0, _request2.default)(options, function (err, response, body) {
                if (err) {
                    reject(err);
                    return;
                }
                if (response.statusCode === 200) {
                    resolve(body);
                    return;
                }

                reject(constants.noRepos);
            });
        });
    });

    return function get(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }