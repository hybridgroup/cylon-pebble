Cylon = require('cylon')

Cylon.api = { host: '0.0.0.0', port: '8080' }

pebbleRobot = {
  name: 'pebble',

  connection:
    name: 'pebble'
    adaptor: 'pebble'

  device:
    name: 'pebble'
    driver: 'pebble'

  work: (my) ->
    c = 100
    every 1.second(), ->
      c++
      str = "c: #{c}"
      my.pebble.message_queue().push(str)
      console.log(my.pebble.last_message())
}

Cylon.robot(pebbleRobot)
Cylon.start()
