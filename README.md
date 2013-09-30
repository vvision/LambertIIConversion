LambertIIConversion
===================

LambertIIConversion is a quick example of geographical conversion with Proj4Js using NodeJs. It converts the position of an antenna (x and y fields in siteCoord.csv) from the Lambert II coordinates system into Latitude/Longitude.

Requirements
============

* NodeJs

Installation
============

* Run `npm install` to retrieve libraries used such as node-proj4js.
* Move the file **EPSG27572.js** in `node_modules/proj4js/lib/defs` to enable conversion from or to Lambert II.
* Since the node_modules directory is provided, the two steps above shouldn't be necessary.
* Run the program with `node conversion.js`.

Output
======
The program will output all data in a file named **newCoord.csv**.
This file should be initialized with **"c";"name";"l";"lat";"lon";"X";"Y";"s"**.
You can see an example of a proper initialized file in newCoord_example.csv.
The generated csv will have two more fields: Latitude and Longitude.
You can find an already generated file named *newCoord_complete.csv*.

License
=======
