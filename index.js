const lineReader = require('line-reader');

lineReader.eachLine('/home/pi/blue_hydra/blue_hydra_rssi.log', function(lines) {
    var line = lines.split()
    console.log(line[1]);
});