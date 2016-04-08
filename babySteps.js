var arr = process.argv;
var total = 0;

for(var i = 2; i < arr.length; i++){
	total += Number(arr[i]);
}

console.log(total);