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

    message_queue: ->
      @messages

    last_message: ->
      @messages[@messages.length-1]
