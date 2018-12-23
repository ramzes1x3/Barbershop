var ggw = [];
var h = 1;
for(var g = 100; g > ggw.length+2; g--){
	h++;
	ggw.push(h);
};

var jjh = [];
for(var i = 0; i < ggw.length; i++){
	var simple = 2;
	for(var j = i + 1; j < ggw.length-1; j++){
		if(simple % j){
			simple = j;
			jjh.push(simple); continue
		}
	}
}

console.log(jjh);