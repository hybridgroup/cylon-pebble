###
 * Cylonjs Pebble adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict';

namespace = require 'node-namespace'
require './commands'

namespace "Cylon.Adaptor", ->
  class @Pebble extends Cylon.Basestar
    constructor: (opts) ->
      super
      @connection = opts.connection
      @name = opts.name
      @pebble = null
      @connector = null
      @myself = this

    commands: -> Cylon.Pebble.Commands

    connect: (callback) ->
      Logger.debug "Connecting to Pebble '#{@name}'..."

      (callback)(null)
      @connection.emit 'connect'

    disconnect: ->
      Logger.debug "Disconnecting from Pebble '#{@name}'..."
