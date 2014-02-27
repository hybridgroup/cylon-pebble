/*
 * cylon-pebble
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var namespace = require('node-namespace');

require('cylon');
require('./commands');
require('./adaptor');
require('./driver');

module.exports = {
  adaptor: function(opts) {
    return new Cylon.Adaptors.Pebble(opts);
  },

  driver: function(opts) {
    return new Cylon.Drivers.Pebble(opts);
  },

  register: function(robot) {
    Logger.info("Registering Pebble adaptor for " + robot.name);
    robot.registerAdaptor('cylon-pebble', 'pebble');

    Logger.info("Registering Pebble driver for " + robot.name);
    return robot.registerDriver('cylon-pebble', 'pebble');
  }
};
