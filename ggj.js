//c scale: 440, 493, 554, 587, 659, 739, 830, 880
var dict = {0:440, 1:493, 2:554, 3:587};

dict = T("ndict", {dict:dict});
T("tri", {freq:dict, mul:0.25}).play();


T("interval", {interval:500}, function(count) {
    dict.index = count % 4;
}).start();

/**
var synth = T("OscGen", {wave:"saw", mul:0.25}).play();
var keydict = T("ndict.key");
var midicps = T("midicps");
T("keyboard").on("keydown", function(e) {
  var midi = keydict.at(e.keyCode);
  console.log(midi);
  if (midi) {
    var freq = midicps.at(midi);
    synth.noteOnWithFreq(freq, 100);
  }
}).on("keyup", function(e) {
  var midi = keydict.at(e.keyCode);
  if (midi) {
    synth.noteOff(midi, 100);
  }
}).start();
**/