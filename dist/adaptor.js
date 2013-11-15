/*
 * Cylonjs Pebble adaptor
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

  namespace("Cylon.Adaptor", function() {
    return this.Pebble = (function(_super) {
      __extends(Pebble, _super);

      function Pebble(opts) {
        Pebble.__super__.constructor.apply(this, arguments);
        this.connection = opts.connection;
        this.name = opts.name;
        this.pebble = null;
        this.connector = null;
        this.myself = this;
      }

      Pebble.prototype.commands = function() {
        return Cylon.Pebble.Commands;
      };

      Pebble.prototype.connect = function(callback) {
        Logger.debug("Connecting to Pebble '" + this.name + "'...");
        callback(null);
        return this.connection.emit('connect');
      };

      Pebble.prototype.disconnect = function() {
        return Logger.debug("Disconnecting from Pebble '" + this.name + "'...");
      };

      return Pebble;

    })(Cylon.Basestar);
  });

}).call(this);
