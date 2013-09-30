var fs = require('fs');
var lazy = require('lazy');
var Proj4js = require("proj4js");

var sourceFile = './siteCoord.csv';
var destFile = 'newCoord.csv';
var str = "";

function lambert2LatLon(file, callback) {
	var source = new Proj4js.Proj('EPSG:27572'); //Source coordinates
	var dest = new Proj4js.Proj('EPSG:4326'); //Dest coordinates will be in Longitude/Latitude

	//Reading the file line by line
	new lazy(fs.createReadStream(file))
		.lines
		.forEach(function(line) {
			//Create an array with elements separated by ';' 
			var array = line.toString().split(';');
			//Removing " from Lambert II coordinates
		  var cleanX = array[3].replace('"','').replace('"','');
		  var cleanY = array[4].replace('"','').replace('"','');
		  var p = new Proj4js.Point([parseFloat(cleanX), parseFloat(cleanY)]);
		  
		  //Convert LambertII into Latitude/Longitude
		  var latLon = Proj4js.transform(source, dest, p)
		  //console.log('X ' + latLon.x + ' Y ' + latLon.y);
	
			//Building the content of the file
  		str += array[0] + ';' + array[1] + ';' + array[2] + ';' + latLon.y + ';' + latLon.x + ';' + array[3] + ';' + array[4] + ';' + array[5];
		});
	callback(str);
}

lambert2LatLon(sourceFile, function(data) {
	//Waiting 15s for str to be "fully populated". Should be done in a nicer way.
	setTimeout(function() {fs.appendFile(destFile, str, function (err) {
			if (err) throw err;
			console.log(str);
			console.log('Done');
		});
	}, 5000);
});

