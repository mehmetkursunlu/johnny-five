var five = require("../lib/johnny-five.js"),
    board, sensor;

board = new five.Board({
  debug: true
});

board.on("ready", function() {

  // Create a new `sensor` hardware instance.
  sensor = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    sensor: sensor
  });

  // Properties

  // sensor.normalized
  //
  // Current value of a sensor 0-255
  //

  // sensor.scaled
  //
  // Current value of a sensor, scaled to a value
  // between the lower and upper bound set by calling
  // scale( low, high ).
  //
  // Defaults to value between 0-255
  //


  // Sensor Event API

  // "read"
  //
  // Fires when the pin is read for a value
  //
  sensor.scale([ 0, 100 ]).on("read", function() {
    console.log( this.normalized, this.scaled );
  });
});

// Tutorials
//
// http://protolab.pbworks.com/w/page/19403657/TutorialSensors
