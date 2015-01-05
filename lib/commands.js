/*
 * Cylonjs Pebble commands
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [
  /**
   * Sends a notification to the Pebble
   *
   * @param {String} message
   * @return {String} message
   * @publish
   */
  "send_notification",

  /**
   * Checks if there are pending messages
   *
   * @return {String|null} message
   * @publish
   */
  "pending_message",

  /**
   * Emits an event, with the supplied data
   *
   * @param {String} name name of the event to emit
   * @param {Object} data any payload that should be emitted with the event
   * @return {null}
   * @publish
   */
  "publish_event"
];
