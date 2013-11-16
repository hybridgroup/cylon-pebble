###
 * Cylonjs Pebble commands
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

namespace = require 'node-namespace'

namespace "Cylon.Pebble", ->
  @Commands = [
    'message',
    'message_queue',
    'last_message'
  ]
