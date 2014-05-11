/*
 * Cylonjs Pebble commands
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

var namespace = require('node-namespace');

namespace("Cylon.Pebble", function() {
  this.Commands = [
		'send_notification',
		'pending_message',
    'publish_event'
  ];
});
