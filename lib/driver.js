/*
 * Cylon.js Pebble driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var namespace = require('node-namespace');

require('./cylon-pebble');
require('./commands');

namespace("Cylon.Drivers", function() {
  this.Pebble = (function(klass) {
    subclass(Pebble, klass);

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

    //emit_event would be a better name, but we need to keep it this way to be compatible with chomps
    Pebble.prototype.publish_event = function(name, data) {
    }

    return Pebble;

  })(Cylon.Driver);
});
