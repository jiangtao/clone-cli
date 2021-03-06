'use strict';

var _api = require('./api');

var _log = require('./log');

var _constants = require('./constants');

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _clone = require('./clone');

var _clone2 = _interopRequireDefault(_clone);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Thanks to: https://api.github.com/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * git clone -u --name --q  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


const yargs = (0, _minimist2.default)(process.argv.slice(2));
const { u, name, q = {}, version, v } = yargs;_asyncToGenerator(function* () {
  let repos;

  if (version || v) {
    (0, _log.log)(`clone version: ${_package2.default.version}`);
  }

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