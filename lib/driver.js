/*
 * Cylon.js Driver driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

/* eslint camelcase: 0 */

var Cylon = require("cylon");

var Commands = require("./commands");

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);
  this.setupCommands(Commands);
  this.messages = [];

  this.events = [
    /**
     * Emitted when a Pebble button is pushed.
     *
     * @event button
     */
    "button",

    /**
     * Emitted when an accelerometer event is triggered in the Pebble.
     *
     * @event accel
     */
    "accel",

    /**
     * Emitted when the Pebble detects a tap.
     *
     * @event tap
     */
    "tap"
  ];
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

/**
 * Starts the driver
 *
 * @param {Function} callback to be triggered when started
 * @return {void}
 */
Driver.prototype.start = function(callback) {
  this.defineDriverEvent("button");
  this.defineDriverEvent("accel");
  this.defineDriverEvent("tap");

  callback();
};

/**
 * Stops the driver
 *
 * @param {Function} callback to be triggered when halted
 * @return {void}
 */
Driver.prototype.halt = function(callback) {
  callback();
};

/**
 * Sends a notification to the Pebble
 *
 * @param {String} message notification to write
 * @return {String} message
 * @publish
 */
Driver.prototype.send_notification = function(message) {
  this.messages.push(message);
  return message;
};

/**
 * Returns the current message queue
 *
 * @return {String[]} message queue
 * @publish
 */
Driver.prototype.message_queue = function() {
  return this.messages;
};

/**
 * Checks if there are pending messages
 *
 * @return {String|null} message
 * @publish
 */
Driver.prototype.pending_message = function() {
  var message = this.messages.shift();
  return (typeof message === "undefined") ? null : message;
};

/**
 * Emits an event, with the supplied data
 *
 * @param {String} name name of the event to emit
 * @param {Object} data any payload that should be emitted with the event
 * @return {void}
 * @publish
 */
Driver.prototype.publish_event = function(name, data) {
  return this.connection.emit(name, data);
};
