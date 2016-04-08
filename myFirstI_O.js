var fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);

var str = buff.toString().split("\n");

console.log(str.length - 1);