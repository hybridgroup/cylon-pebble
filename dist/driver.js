/*
 * Cylong Pebble driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  'use strict';
  var namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace = require('node-namespace');

  require('./commands');

  namespace("Cylon.Driver", function() {
    return this.Pebble = (function(_super) {
      __extends(Pebble, _super);

      function Pebble(opts) {
        Pebble.__super__.constructor.apply(this, arguments);
        this.device = opts.device;
        this.connection = this.device.connection;
      }

      Pebble.prototype.commands = function() {
        return Cylon.Pebble.Commands;
      };

      Pebble.prototype.start = function(callback) {
        Logger.debug("Pebble started");
        callback(null);
        return this.device.emit('start');
      };

      Pebble.prototype.stop = function() {
        return Logger.debug("Pebble stopping");
      };

      return Pebble;

    })(Cylon.Basestar);
  });

}).call(this);
