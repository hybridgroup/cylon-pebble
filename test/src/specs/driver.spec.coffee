'use strict'

source 'driver'

describe 'Cylon.Drivers.Pebble', ->
  pebble = new Cylon.Drivers.Pebble
    device: {}

  it "exposes a list of commands in the 'commands' method", ->
    expect(pebble.commands()).to.be.an 'array'
    for command in pebble.commands()
      expect(command).to.be.a 'string'

  it "stores an array of messages in the @messages variable", ->
    expect(pebble.messages).to.be.an 'array'

  it "has a message_queue function to access the messages", ->
    pebble.messages.push "test"
    expect(pebble.message_queue()).to.be.eql ["test"]

  it "has a last_message function to access the latest message in the queue", ->
    pebble.messages.push "robots"
    expect(pebble.last_message()).to.be.eql "robots"
