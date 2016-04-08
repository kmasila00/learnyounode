var fs = require('fs')

function callback(err, data){
	console.log(data.toString().split("\n").length - 1);
}

fs.readFile(process.argv[2], callback);