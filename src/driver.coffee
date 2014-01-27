###
 * Cylong Pebble driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict'

namespace = require 'node-namespace'

require './cylon-pebble'
require './commands'

namespace "Cylon.Drivers", ->
  class @Pebble extends Cylon.Driver
    constructor: (opts = {}) ->
      super
      @messages = []
      @proxyMethods Cylon.Pebble.Commands, @connection, this

    commands: ->
      Cylon.Pebble.Commands

# Public: message_queue()
# Some text Here.
#
# Returns null.
    message_queue: ->
      @messages

# Public: last_message()
# Some text Here.
#
# Returns null.
    last_message: ->
      @messages[@messages.length-1]
