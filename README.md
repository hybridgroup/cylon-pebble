# Cylon.js For Pebble

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and physical computing using Node.js

This module provides an adaptor and driver for the Pebble smart watch (http://getpebble.com/). It uses the Pebble 2.0 SDK, and requires the 2.0 iOS or Android app, and that the "Watchbot" app (https://github.com/hybridgroup/watchbot) has been installed on the Pebble watch.

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-pebble.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-pebble) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-pebble/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-pebble) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-pebble/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-pebble)

## Getting Started
* Install the module with: `npm install cylon-pebble`
* Install Pebble 2.0 iOS or Android app. (If you haven't already)
* Follow README to install and configure "watchbot" on your watch: https://github.com/hybridgroup/watchbot

## Examples

* Before running the example, make sure configuration settings match with your program,
in example, api host is your computer IP, robot name is 'pebble', and robot api port is 8080

### JavaScript

```javascript
var Cylon = require('cylon');

Cylon.config({
  api: {
    host: '0.0.0.0',
    port: '8080',
    ssl: false
  }
});

Cylon.api();

Cylon.robot({
  name: 'pebble',

  connection: {
    name: 'pebble',
    adaptor: 'pebble'
  },

  device: {
    name: 'pebble',
    driver: 'pebble'
  },

  work: function(my) {
    my.pebble.send_notification("Hello Pebble!");

    my.pebble.on('button', function(data) {
      console.log("Button pushed: " + data);
    });

    my.pebble.on('tap', function() {
      console.log("Tap event detected");
    });
  }
}).start();
```

## Supported Features

* Event detection of 3 main pebble buttons
* Tap event
* Accelerometer support
* Sending text notification to pebble

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

* All patches must be provided under the Apache 2.0 License
* Please use the -s option in git to "sign off" that the commit is your work and you are providing it under the Apache 2.0 License
* Submit a Github Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & Lint and test your code using [Grunt](http://gruntjs.com/).
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git

## Release History

Version 0.13.0 - Compatibility with Cylon 0.20.0

Version 0.12.1 - Correct issue with Adaptor startup

Version 0.12.0 - Compatibility with Cylon 0.19.0

Version 0.10.0 - Compatibility with Cylon 0.18.0

Version 0.9.0 - Compatibility with Cylon 0.16.0

Version 0.8.1 - Add peerDependencies to package.json

Version 0.8.0 - Compatibility with Cylon 0.15.0

Version 0.7.0 - Compatibility with Cylon 0.14.0, remove node-namespace.

Version 0.6.0 - Release for cylon 0.12.0

Version 0.5.0 - Release for cylon 0.11.0, refactor into pure JavaScript

Version 0.4.0 - Release for cylon 0.10.0

Version 0.3.0 - Release for cylon 0.9.0

Version 0.2.0 - Release for cylon 0.8.0

Version 0.1.0 - Initial release

## License
Copyright (c) 2013-2014 The Hybrid Group. Licensed under the Apache 2.0 license.
