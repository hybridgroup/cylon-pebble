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

    Pebble.prototype.start = function() {
      this.defineDriverEvent({ eventName: 'button' });
      this.defineDriverEvent({ eventName: 'accel'  });

      return Pebble.__super__.start.apply(this, arguments);
    };

    Pebble.prototype.commands = function() {
      return Cylon.Pebble.Commands;
    };

    Pebble.prototype.send_notification = function(message) {
      return this.messages.push(message);
    }

    Pebble.prototype.message_queue = function() {
      return this.messages;
    };

    Pebble.prototype.pending_message = function() {
      var last_message = this.messages.shift();

      return (last_message == undefined) ? null : last_message;
    };

    //emit_event would be a better name, but we need to keep it this way to be compatible with chomps
    Pebble.prototype.publish_event = function(name, data) {
      return this.connection.emit(name, data);
    }

    return Pebble;

  })(Cylon.Driver);
});
