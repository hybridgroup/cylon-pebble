/*
 * cylon-pebble
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  'use strict';
  var namespace,
    __slice = [].slice;

  namespace = require('node-namespace');

  require('./adaptor');

  require('./driver');

  module.exports = {
    adaptor: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Cylon.Adaptor.Pebble, args, function(){});
    },
    driver: function(opts) {
      return new Cylon.Driver.Pebble(opts);
    },
    register: function(robot) {
      Logger.debug("Registering Pebble adaptor and drivers for " + robot.name);
      robot.registerAdaptor('cylon-pebble', 'pebble');
      return robot.registerDriver('cylon-pebble', 'pebble');
    }
  };

}).call(this);
