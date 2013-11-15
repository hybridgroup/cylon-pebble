'use strict';

# Needed so that tests don't implode
namespace = require 'node-namespace'
namespace 'Cylon', ->
  class @Basestar
    constructor: ->

pebble = source("cylon-pebble")

describe "basic tests", ->
  it "standard async test", (done) ->
    bool = false
    bool.should.be.false

    setTimeout ->
      bool.should.be.false
      bool = true
      bool.should.be.true
    150

    setTimeout ->
      bool.should.be.true
      done()
    300

  it "standard sync test", ->
    data = []
    obj = id: 5, name: 'test'
    data.should.be.empty
    data.push obj
    data.should.have.length 1
    # soft equal
    data[0].should.be.eql obj
    # hard equal
    data[0].should.be.equal obj

  it "can register", ->
    pebble.register.should.be.a 'function'

  it "can create an adaptor", ->
    pebble.adaptor.should.be.a 'function'

  it "can create a driver", ->
    pebble.driver.should.be.a 'function'
