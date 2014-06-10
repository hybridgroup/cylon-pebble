"use strict";

var Adaptor = source('adaptor');

describe('Cylon.Adaptors.Pebble', function() {
  var pebble = new Adaptor();

  it("exposes a 'commands' function containing all adaptor commands", function() {
    var commands = pebble.commands;

    expect(commands).to.be.a('array');

    for (var c = 0; c < commands.length; c++) {
      expect(commands[c]).to.be.a('string');
    }
  });
});
