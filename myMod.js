var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback){

	fs.readdir(dir, function(err,list){
		if(err){ return (err);}

		var arr = [];
		var check = "." + ext;
		for(var i = 0; i < list.length; i++){
			if(path.extname(list[i]) === check){
				arr.push(list[i]);
			}
		}
		return callback(null,arr);
	});

}