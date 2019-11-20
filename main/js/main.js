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
	$(this).stop().css({"transform": "translateX(50px)"});
});
$(".tags").mouseleave(function(){
	$(this).stop().css({"transform": "translateX(100px)"});
});

$("#abme-next").click(function(){
	$(this).hide();
	$("#abme-prev").show();
	$(".me-1").css({"transform": "translateX(0px)","background-color": "rgba(255, 255, 255, 0)"})
	$(".me-2, .me-3").show("fast", function(){
	$(".me-2, .me-3").css({"transform": "translateX(0)","opacity": 1});
	$(".me-1-2").css({"background-color": "rgba(255, 255, 255, 0.705)", "padding": "3rem 1rem" })
	})
});
$("#abme-prev").click(function(){
	$(this).hide();
	$("#abme-next").show();
	$(".me-1").css({"transform": "translateX(400px)"})
	$(".me-2").css({"opacity": 0, "transform": "translateX(-35px)"});
	$(".me-3").css({"opacity": 0, "transform": "translateX(-500px)"});
});

$(window).resize(function() { 
	if($(window).width() > 1300) { 
		$("#abme-next").show();
	}
	 else {
		$(".me-2, .me-3").css({"display": "none"});
		$(".click").hide();
		$(".me-1").css({"transform": "translateX(0px)"})
	 }
	});







$(".tag-bar").click(function(){
	$(".navis-overlay").stop().css({"transform": "translateX(0%)"});
	$("body").css({ "overflow-y": "hidden"})
	setTimeout(function(){
		$(".navis-wrap").css({"transform": "translateX(0%)"})},200);
	$(".navis-overlay, .navis-wrap").on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
		e.stopPropagation(); 
		return false;
		})
	});
	
	$(".navis-overlay , .close-bt").click(function(){
		$(".navis-wrap").stop().css({"transform": "translateX(100%)"});
		setTimeout(function(){
			$(".navis-overlay").css({"transform": "translateX(100%)"})
			$("body").css({ "overflow-y": "scroll"})},200);
			$(".navis-overlay").off('scroll touchmove mousewheel'); 
});


// $(".navis-hidden").mouseleave(function(){
// 	$(this).stop().css({"transform": "translateX(320px)"});
// });



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
	autoplay: false,
	
});

$(".works").mouseover(function(){
	$(this).find("img").css({"filter": "brightness(0.4)"});
	$(this).find(".work-cont").css({"opacity": 1});
});
$(".works").mouseleave(function(){
	$(this).find("img").css({"filter": "brightness(1)"});
	$(this).find(".work-cont").css({"opacity": 0});
});
$("#work-prev", "#work-next").click(function(){
	$(".works").find(".work-cont").hide();
})



wow = new WOW(
	{
	boxClass:     'lt1',      // default
	animateClass: 'slideInRight', // default
	offset:       5,          // default
	mobile:       true,       // default
	live:         true        // default
  }
  )
  wow.init();

wow = new WOW(
	{
	boxClass:     'lt2',      // default
	animateClass: 'slideInRight', // default
	offset:       5,          // default
	mobile:       true,       // default
	live:         true        // default
  }
  )
  wow.init();

new WOW().init();