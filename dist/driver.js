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

  require('./cylon-pebble');

  require('./commands');

  namespace("Cylon.Drivers", function() {
    return this.Pebble = (function(_super) {
      __extends(Pebble, _super);

      function Pebble(opts) {
        if (opts == null) {
          opts = {};
        }
        Pebble.__super__.constructor.apply(this, arguments);
        this.messages = [];
        this.proxyMethods(Cylon.Pebble.Commands, this.connection, this);
      }

      Pebble.prototype.commands = function() {
        return Cylon.Pebble.Commands;
      };

      Pebble.prototype.message_queue = function() {
        return this.messages;
      };

      Pebble.prototype.last_message = function() {
        return this.messages[this.messages.length - 1];
      };

      return Pebble;

    })(Cylon.Driver);
  });

}).call(this);
