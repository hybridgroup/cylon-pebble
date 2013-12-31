'use strict'

source 'adaptor'

describe 'Cylon.Adaptors.Pebble', ->
  adaptor = new Cylon.Adaptors.Pebble

  it "exposes a 'commands' function containing all adaptor commands", ->
    expect(adaptor.commands()).to.be.an 'array'
    for command in adaptor.commands()
      expect(command).to.be.a 'string'
