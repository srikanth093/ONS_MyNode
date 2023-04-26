const path = require('path');
var x = "Desktop/ons/node/index.html";
console.log("LIIA ",path.normalize(x));
console.log("ONN ",path.delimiter);
console.log("Dirname ",path.dirname(x));
console.log("basename ",path.basename(x));
console.log("extname ",path.extname(x));

console.log("DIRNAME ",__dirname);
console.log("ONSFILENAME ",__filename);