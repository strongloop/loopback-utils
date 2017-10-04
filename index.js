// Copyright IBM Corp. 2015,2017. All Rights Reserved.
// Node module: loopback-utils
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

module.exports = Object.assign({
  ObserverMixin: require('./lib/observer'),
}, require('./lib/utils'));

Object.defineProperty(exports, 'version', {
  get: function() {
    return require('./package.json').version;
  },
});
