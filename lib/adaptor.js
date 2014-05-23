/*
 * Cylon.js Adaptor adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require('cylon');

var Commands = require('./commands');

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }
  Adaptor.__super__.constructor.apply(this, arguments);
  this.pebble = null;
  this.connector = null;
};

subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = function() {
  return Commands;
};
