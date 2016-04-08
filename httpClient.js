var http = require('http');

function callback(response){
	response.on("data", function(data){
		console.log(data.toString());
	})
}

http.get(process.argv[2], callback);
