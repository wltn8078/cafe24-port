var interval;
var gap = 2000;
var speed = 500;


var i=0;
var ban = setInterval(function(){
	$(".banner > .slides").stop().animate({"left":-(i*100)+"%"},speed,function(){
		if(i==3) {
			$(this).css({"left":0});
			i=1; }
		else i++;
	});
},gap);