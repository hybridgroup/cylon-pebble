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

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);
  this.setupCommands(Commands);
  this.messages = [];
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  this.defineDriverEvent('button');
  this.defineDriverEvent('accel');
  this.defineDriverEvent('tap');

  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};

Driver.prototype.send_notification = function(message) {
  this.messages.push(message);
  return message;
};

Driver.prototype.message_queue = function() {
  return this.messages;
};

Driver.prototype.pending_message = function() {
  var message = this.messages.shift();
  return (typeof(message) === 'undefined') ? null : message;
};

// emit_event would be a better name, but we need to keep it this way to be
// compatible with watchbot
Driver.prototype.publish_event = function(name, data) {
  return this.adaptor.emit(name, data);
};
