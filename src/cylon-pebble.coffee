###
 * cylon-pebble
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict';

namespace = require 'node-namespace'

require 'cylon'
require './adaptor'
require './driver'

module.exports =
  adaptor: (args...) ->
    new Cylon.Adaptors.Pebble(args...)

  driver: (opts) ->
    new Cylon.Drivers.Pebble(opts)

  register: (robot) ->
    Logger.debug "Registering Pebble adaptor and drivers for #{robot.name}"
    robot.registerAdaptor 'cylon-pebble', 'pebble'
    robot.registerDriver 'cylon-pebble', 'pebble'
