'use strict';

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _api = require('./api');

var _log = require('./log');

var _constants = require('./constants');

var _clone = require('./clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Thanks to: https://api.github.com/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * git clone -u --name --q  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


const { u, name, q = {} } = _yargs2.default.argv;_asyncToGenerator(function* () {
    let repos;
    if (!name) {
        (0, _log.warn)('name invalid');
        return;
    }
    try {
        repos = u ? yield (0, _api.getUserRepos)(name, Object.assign(q, { client_id: _constants.client_id, client_secret: _constants.client_secret })) : yield (0, _api.getOrgRepos)(name, Object.assign(q, { client_id: _constants.client_id, client_secret: _constants.client_secret }));
        yield Promise.all(repos.map(function (item) {
            return (0, _clone2.default)(`git clone ${item.clone_url}`);
        }));
    } catch (e) {
        (0, _log.warn)(e);
    }
})();