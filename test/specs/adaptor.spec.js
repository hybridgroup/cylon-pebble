"use strict";

source('adaptor');

describe('Cylon.Adaptors.Pebble', function() {
  var pebble = new Cylon.Adaptors.Pebble;

  it("exposes a 'commands' function containing all adaptor commands", function() {
    var command, _i, _len, _ref, _results;
    expect(pebble.commands()).to.be.an('array');
    _ref = pebble.commands();
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      command = _ref[_i];
      _results.push(expect(command).to.be.a('string'));
    }
    return _results;
  });
});
