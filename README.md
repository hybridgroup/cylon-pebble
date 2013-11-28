# Cylon.js For Pebble

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and physical computing using Node.js

This module provides an adaptor and driver for the Pebble smart watch (http://getpebble.com/). It uses the Pebble 2.0 SDK, and requires the 2.0 iOS or Android app, and that the "Chomps" app (https://github.com/hybridgroup/chomps) has been installed on the Pebble watch.

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-pebble.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-pebble)

## Getting Started
Install the module with: `npm install cylon-pebble`

## Examples

### JavaScript

```javascript
  Cylon = require('cylon');

  Cylon.api({
    host: '0.0.0.0',
    port: '8080'
  });

  PebbleRobot = (function() {

    function PebbleRobot() {}

    PebbleRobot.prototype.connection = {
      name: 'pebble',
      adaptor: 'pebble'
    };

    PebbleRobot.prototype.device = {
      name: 'pebble',
      driver: 'pebble'
    };

    PebbleRobot.prototype.work = function(self) {
      var c;
      c = 100;
      return every(1..second(), function() {
        var str;
        c++;
        str = "c: " + c;
        self.pebble.message_queue().push(str);
        return console.log(self.pebble.last_message());
      });
    };

    return PebbleRobot;

  })();

  bot = new PebbleRobot();

  bot.name = 'pebble';

  Cylon.robot(bot);

  Cylon.start();
```
### CoffeeScript
```coffee-script
  Cylon = require('cylon')

  Cylon.api host: '0.0.0.0', port: '8080'

  class PebbleRobot
    connection:
      name: 'pebble', adaptor: 'pebble'

    device:
      name: 'pebble', driver: 'pebble'

    work: (self) ->
      c = 100
      every 1.second(), ->
        c++
        str = "c: \#{c}"
        self.pebble.message_queue().push(str)
        console.log(self.pebble.last_message())

  bot = new PebbleRobot()
  bot.name = 'pebble'
  Cylon.robot bot

  Cylon.start()
```

## Documentation
We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
None yet...

## License
Copyright (c) 2013 The Hybrid Group. Licensed under the Apache 2.0 license.
