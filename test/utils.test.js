// Copyright IBM Corp. 2015,2017. All Rights Reserved.
// Node module: loopback-datasource-juggler
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

var should = require('./init');
var Promise = require('bluebird');
var utils = require('..');

describe('utils.createPromiseCallback', function() {
  var callback;
  beforeEach(function defineObserver() {
    callback = new utils.createPromiseCallback();
  });

  it('creates a callback', function() {
    should.exist(callback);
    callback.should.be.Function();
  });

  it('exposes a promise', function() {
    should.exist(callback.promise);
    callback.promise.should.be.Promise();
  });

  it('resolves the promise', function(done) {
    callback.promise.then(function(value) {
      should.exist(value);
      value.should.be.equal('resolve');
      done();
    });
    callback(null, 'resolve');
  });

  it('rejects the promise', function(done) {
    callback.promise.catch(function(error) {
      should.exist(error);
      error.should.be.equal('reject');
      done();
    });
    callback('reject');
  });
});
