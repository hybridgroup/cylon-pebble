###
 * Cylong Pebble driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict';
namespace = require 'node-namespace'
require './commands'

namespace "Cylon.Driver", ->
  class @Pebble extends Cylon.Basestar
    constructor: (opts) ->
      super
      @device = opts.device
      @connection = @device.connection
      #@proxyMethods Cylon.ARDrone.Commands, @connection, this

    commands: -> Cylon.Pebble.Commands

    start: (callback) ->
      Logger.debug "Pebble started"
      (callback)(null)
      @device.emit 'start'

    stop: ->
      Logger.debug "Pebble stopping"
