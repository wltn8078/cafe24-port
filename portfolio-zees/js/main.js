window.addEventListener("wheel", wheelFn, {passive: false});
function wheelFn(){
	event.preventDefault();
	event.stopPropagation();
	var hei = $(window).outerHeight(); //한 페이지의 높이
	var delta = event.deltaY; //휠 이벤트
	var posY = event.pageY; 	// 모든 창의 값
	var n = Math.floor(posY/hei); 
	var tar = 0;
	var pageCnt = $("section").length; //4
	if(delta > 0) ( n < pageCnt - 1) ? wheelAni((n + 1) * hei, n, (n + 1)): "";
	else (n > 0) ? wheelAni((n - 1) * hei, n, (n - 1)) : ""; 
}
function wheelAni(pos, prePage, nowPage) {
	console.log(prePage, nowPage)
	$("html, body").stop().animate({"scrollTop": pos}, 300, function(){

	});
}


$("#abme").click(function(){
	$("html, body").stop().animate({"scrollTop": 900}, 300, function(){
	});
})


$(window).scroll(function(){
	var scTop = $(this).scrollTop();
	if(scTop > 400) {
		$(".bt-top").addClass("bt-top-show");}
else{
		$(".bt-top").removeClass("bt-top-show");}
});
$(".bt-top").click(function(){
	$("html, body").stop().animate({"scrollTop":0},500);
});


$(".navs").mouseover(function(){
	$(this).find(".nav-tit").css({"transform": "scale(1.05)"});
});
$(".navs").mouseleave(function(){
	$(this).find(".nav-tit").css({"transform": "scale(1)"});
});

// $("#btn3").click(function(){
// 	$("#i2").slideToggle(1000);
// 	$("#i3").slideToggle(100000);



$(".tags").mouseover(function(){
	$(this).stop().css({"transform": "translateX(100px)"});
});
$(".tags").mouseleave(function(){
	$(this).stop().css({"transform": "translateX(150px)"});
});


$("#abme-next").click(function(){
	$(this).hide();
	$("#abme-prev").show();
	$(".Name").css({"letter-spacing": "4px", "font-size":"6rem"})
	$(".me-1").css({"transform": "translateX(0px)", "width": "95%"})
	$(".me-2, .me-3").show("fast", function(){
	$(".me-2, .me-3").css({"transform": "translateX(0)","opacity": 1});
	})
});

$("#abme-prev").click(function(){
	$(this).hide();
	$("#abme-next").show();
	$(".me-1").css({"transform": "translateX(400px)", "width": "97%"})
	$(".Name").css({"letter-spacing": "6px", "font-size":"6.3rem"})
	$(".me-2").css({"opacity": 0, "transform": "translateX(-35px)"});
	$(".me-3").css({"opacity": 0, "transform": "translateX(-500px)"});
});



$(".tag-bar").click(function(){
	$(".navis-hidden").stop().css({"transform": "translateX(35px)"});
});
$(".closing").click(function(){
	$(".navis-hidden").stop().css({"transform": "translateX(320px)"});
});

$(".navis-hidden").mouseleave(function(){
	$(this).stop().css({"transform": "translateX(320px)"});
});



$(".aboutme2").find(".prog").mouseover(function(){
	$(this).find("span").removeClass("d-none");
})
$(".aboutme2").find(".prog").mouseleave(function(){
	$(this).find("span").addClass("d-none");
})


var now = 0;
	$("#about-prev").click(function(){
	if(now > 0) now--;
	ani();
}).hide();
	$("#about-next").click(function(){
	if(now < 1) now++;
	ani();
});
function ani() {
	$(".me-1-2").stop().animate({"left": (-100*now)+"%"}, 500);
	if(now == 0) {
		$("#about-prev").hide();
		$("#about-next").show(); }
	else {
		$("#about-prev").show();
		$("#about-next").hide();
	}
}
;


var workSlide = new FxSlide({
	slides : $(".works"), 
	cnt:1, 
	speed : 1000,
	delay : 4000,
	prev: $("#work-prev"),
	next: $("#work-next"),
	autoplay: false
});



/*
$(window).scroll(function(){
	var num = $(this).scrollTop();
	// 스크롤이 500 이상 700이하 일때만 움직이게
	if ( num > 400 ) {
		$(".aboutme2 .side-rot-rig2").css({"transform" : "rotate(-10deg)"});
	}
	else {
		$(".aboutme2 .side-rot-rig2").css({"transform" : "rotate(10deg)"});
	}
	if ( num > 700) {
		$(".aboutme2 .side-rot-lef").css({"transform" : "rotate(-3deg)"});
		$(".aboutme2 .side-rot-lef2").css({"transform" : "rotate(20deg)"});
		$(".aboutme2 .side-rot-rig").css({"transform" : "rotate(15deg)"});
	}
	else {
		$(".aboutme2 .side-rot-lef").css({"transform" : "rotate(-10deg)"});
		$(".aboutme2 .side-rot-lef2").css({"transform" : "rotate(5deg)"});
		$(".aboutme2 .side-rot-rig").css({"transform" : "rotate(10deg)"});
	}
	if ( num > 1700) {
		$(".work3 .side-rot-rig").css({"transform" : "rotate(-10deg)"});
		$(".work3 .side-rot-rig2").css({"transform" : "rotate(-20deg)"});
		$(".work3 .side-rot-flower").css({"transform" : "rotate(5deg)"});
	}
	else {
		$(".work3 .side-rot-rig").css({"transform" : "rotate(0deg)"});
		$(".work3 .side-rot-rig2").css({"transform" : "rotate(0deg)"});
		$(".work3 .side-rot-flower").css({"transform" : "rotate(-10deg)"});
	}
});


// WOW 시동
new WOW().init();

// tooltip 시동
$(".tooltip-bt").tooltip();

 */