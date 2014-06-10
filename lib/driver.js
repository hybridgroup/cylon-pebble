/*
 * Cylon.js Driver driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Commands = require('./commands');

var Driver = module.exports = function Driver(opts) {
  if (opts == null) {
    opts = {};
  }
  Driver.__super__.constructor.apply(this, arguments);
  this.messages = [];
  this.proxyMethods(Commands, this.connection, this);
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function() {
  this.defineDriverEvent({ eventName: 'button' });
  this.defineDriverEvent({ eventName: 'accel'  });
  this.defineDriverEvent({ eventName: 'tap'    });

  return Driver.__super__.start.apply(this, arguments);
};

Driver.prototype.commands = Commands;

Driver.prototype.send_notification = function(message) {
  this.messages.push(message);

  return message;
}

Driver.prototype.message_queue = function() {
  return this.messages;
};

Driver.prototype.pending_message = function() {
  var last_message = this.messages.shift();

  return (last_message == undefined) ? null : last_message;
};

// emit_event would be a better name, but we need to keep it this way to be
// compatible with watchbot
Driver.prototype.publish_event = function(name, data) {
  return this.connection.emit(name, data);
}
