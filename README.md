LambertIIConversion
===================

LambertIIConversion is a quick example of geographical conversion with Proj4Js using NodeJs. It converts the position of an antenna (x and y fields in siteCoord.csv) from the Lambert II coordinates system into Latitude/Longitude.

Requirements
============

* NodeJs

Installation
============

Once node is installed, in the directory of the project, just run `npm install` to retrieve libraries used such as node-proj4js.
Next step, just copy and paste the file *EPSG27572.js* in `node_modules/proj4js/lib/defs` to enable conversion from or to Lambert II.
Since the node_modules directory is provided, the two steps above shouldn't be necessary.
Finally, just run the program with `node conversion.js`.
The program will output all data in file named *newCoord.csv*.
This file should be initialized with *"c";"name";"l";"lat";"lon";"X";"Y";"s"*.
You can see an example of a proper initialized file in newCoord_example.csv.

Output
======
New csv with two more fields: Latitude and Longitude.
You can find an already generated file named *newCoord_complete.csv*.

License
=======
