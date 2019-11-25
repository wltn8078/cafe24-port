var secNow = 0;
new WheelFn(document.querySelector(".sections"), mainCb);
function mainCb(dir) {
	console.log(dir);
	if(dir == "toLeft") {
		if(secNow < 3) secNow++;
	}
	else {
		if(secNow > 0) secNow--;
	}
	secAni()
	scrollBar()
}

function secAni() {
	$(".section-wrapper").stop().animate({"left": (secNow * -100) + "%"}, 700);
}

function scrollBar(){
	if(secNow > 0) {
		$(".main-bars .main-bar-now").stop().animate({"width": (secNow * 34) + "%"}, 750);
	}
	else {
		$(".main-bars .main-bar-now").stop().animate({"width": "2%"},700);
	}
}


//  1면
$(".zees-logo").css({"stroke-dasharray": "2600", "stroke-dashoffset": "2600"})
$("#zees2-1").addClass('zees-1');
$("#zees2-2").addClass('zees-2');
setTimeout(function(){
$(".hello").css({"opacity": 1})}, 2500);

$(".tags").mouseover(function(){
	$(this).stop().css({"transform": "translateX(50px)"});
});
$(".tags").mouseleave(function(){
	$(this).stop().css({"transform": "translateX(100px)"});
});

$(".tag-bar").click(function(){
	$(".tops").css({"opacity" : 0});
	$(".main-indexs").css({"opacity" : 0});
	$(".main-bar").css({"opacity" : 0});
	$(".zees-logo").css({"stroke-dasharray": "2600", "stroke-dashoffset": "2600"})
	$("#zees1").removeClass('zees-1-Out');
	$("#zees2").removeClass('zees-2-Out');
	$("#zees1").addClass('zees-1');
	$("#zees2").addClass('zees-2');
	$(".navis-overlay").stop().css({"transform": "translateX(0%)"});
	setTimeout(function(){
		$(".navis-wrap").css({"transform": "translateX(0%)"})},200);
	$(".navis-overlay, .navis-wrap").on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
		e.stopPropagation(); 
		return false;
		})
	});
	
	$(".navis-overlay , .close-bt").click(function(){
		$(".zees-logo").css({"stroke-dasharray": "2600", "stroke-dashoffset": "0"})
		$("#zees1").removeClass('zees-1');
		$("#zees2").removeClass('zees-2');
		$("#zees1").addClass('zees-1-Out');
		$("#zees2").addClass('zees-2-Out');
		setTimeout(function(){
		$(".main-bar").css({"opacity" : 1});
		$(".navis-wrap").stop().css({"transform": "translateX(100%)"})
		$(".navis-overlay").css({"transform": "translateX(100%)"})
		$(".tops").css({"opacity" : 1});
		$(".main-indexs").css({"opacity" : 1});
		$(".navis-overlay").off('scroll touchmove mousewheel')},1400);
});

$(".main-index").mouseover(function(){
	$(this).css({"color": "rgb(145, 20, 20)"});
	$(this).find(".index-line").css({"background-color":"rgb(145, 20, 20)"});
})
$(".main-index").mouseleave(function(){
	$(this).css({"transform": "translateY(0px)", "color": "#FFF"});
	$(this).find(".index-line").css({"background-color":"#fff"});
})

$(".navs").mouseover(function(){
	$(this).find(".nav-tit").css({"transform": "scale(1.05)"});
});
$(".navs").mouseleave(function(){
	$(this).find(".nav-tit").css({"transform": "scale(1)"});
});

//  2면
$(".aboutme2 .me-2 .prog").mouseover(function(){
	$(this).find("img").css({"transform": "scale(1.1)","	filter": "opacity(1) saturate(0.6)"});
	$(this).parent().css({"box-shadow" : "1px 1px 4px #ccc"});
});
$(".aboutme2 .me-2 .prog").mouseleave(function(){
	$(this).find("img").css({"transform": "scale(1)","	filter": "opacity(0.8) saturate(0.7)"});
	$(this).parent().css({"box-shadow" : "none"});
});




//  3면
$(".work-page").mouseover(function(){
	$(this).stop().css({"transform": "translateY(-20px)"});
	$(this).find(".page-img").stop().css({"transform": "scale(1.03)"});
});
$(".work-page").mouseleave(function(){
	$(this).stop().css({"transform": "translateY(0px)"});
	$(this).find(".page-img").stop().css({"transform": "scale(1)"});
});



$(".pager-up").mouseover(function(){
	$(this).css({"transform": "translateX(7px)"})
});
$(".pager-up").mouseleave(function(){
	$(this).css({"transform": "translateX(0px)"})
});
$(".pager-down").mouseover(function(){
	$(this).css({"transform": "translateX(-7px)"})
});
$(".pager-down").mouseleave(function(){
	$(this).css({"transform": "translateX(0px)"})
});

$(".tit-3").stop().hide();
$(".pager-down").stop().hide();

$(".pager-up").click(function(){
$("#pages-1").css({"transform": "translateY(-100%)", "opacity" : 0});
$("#pages-2").css({"transform": "translateY(-122.5%)", "opacity" : 1});
$(".tit-2").stop().fadeOut(300);
$(".tit-3").stop().fadeIn(400);
$(".pager-down").stop().show();
$(this).stop().hide();

})
$(".pager-down").click(function(){
	$("#pages-1").css({"transform": "translateY(0px)", "opacity" : 1});
	$("#pages-2").css({"transform": "translateY(0px)", "opacity" : 0})
	$(".tit-3").stop().fadeOut(300);
	$(".tit-2").stop().fadeIn(400);
	$(".pager-up").stop().show();
	$(this).stop().hide();
})

new WOW().init();