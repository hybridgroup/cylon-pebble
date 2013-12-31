###
 * Cylonjs Pebble adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict'

namespace = require 'node-namespace'
require './cylon-pebble'
require './commands'

namespace "Cylon.Adaptors", ->
  class @Pebble extends Cylon.Adaptor
    constructor: (opts = {}) ->
      super
      @pebble = null
      @connector = null

    commands: ->
      Cylon.Pebble.Commands
