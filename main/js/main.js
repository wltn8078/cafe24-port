var secNow = 0;
	$(".bt-prev").hide();

$(".main-index").click(function(){
	secNow = $(this).index();
	secAni();
	scrollBar();
});

$(".bar-round").click(function(){
	secNow = $(this).index();
	secAni();
	scrollBar();
});

$(".bt-prev").click(function(){
	if(secNow > 0) secNow--;
	secAni();
	scrollBar();
});
$(".bt-next").click(function(){
	if(secNow < 3) secNow++;
	secAni();
	scrollBar();
});

new WheelFn(document.querySelector(".sections"), mainCb);
function mainCb(dir) {
	console.log(dir);
	if(dir == "toLeft") { if(secNow < 3) secNow++; }
	else { if(secNow > 0) secNow--; }
	secAni();
	scrollBar();
}
function secAni() {
	console.log(secNow);
	$(".section-wrapper").stop().animate({"left": (secNow * -100) + "%"}, 700);
	if(secNow == 0) {
		$(".bt-prev").hide();
		$(".bt-next").show();
	}
	else if(secNow == 3) {
		$(".bt-prev").show();
		$(".bt-next").hide();
	}
	else {
		$(".bt-prev").show();
		$(".bt-next").show();
	}
}

function scrollBar(){
	$(".main-bars .main-bar-now").stop().animate({"width": (secNow * 33.5) + "%"}, 600);
}



	$(".bar-round").mouseover(function(){
		$(this).find(".round").css({"transform":"scale(1.3)", "opacity": 1});
		$(this).find("span").css({"opacity": 1});
	})
	$(".bar-round").mouseleave(function(){
		$(this).find(".round").css({"transform":"scale(1)", "opacity": 0.7});
		$(this).find("span").css({"opacity": 0});
	})


//  1면

$(".zees-logo").css({"stroke-dasharray": "2600", "stroke-dashoffset": "2600"})
$("#zees2-1").addClass('zees-1');
$("#zees2-2").addClass('zees-2');
setTimeout(function(){
$(".hello").css({"opacity": 1})}, 2000);
setTimeout(function(){
$(".main-indexs").css({"opacity": 1, "transform": "translateY(0px)"})}, 2600);

$(".tags").mouseover(function(){
	$(this).stop().css({"transform": "translateX(50px)"});
});
$(".tags").mouseleave(function(){
	$(this).stop().css({"transform": "translateX(100px)"});
});

$(".tag-bar").click(function(){
	$(".tops").css({"opacity" : 0});
	$(".main-indexs").css({"opacity" : 0, "visibility":"hidden"});
	$(".main-bars").css({"opacity" : 0});
	$(".zees-logo").css({"stroke-dasharray": "2600", "stroke-dashoffset": "2600"})
	$("#zees1").removeClass('zees-1-Out');
	$("#zees2").removeClass('zees-2-Out');
	$("#zees1").addClass('zees-1');
	$("#zees2").addClass('zees-2');
	$(".navis-overlay").stop().css({"transform": "translateX(0%)"});
	setTimeout(function(){
		$(".navis-wrap").css({"transform": "translateX(0%)"})},200);
		$(".navis-hidden").stop().css({"z-index": "99999"});
	$(".scr-wiper").css({"opacity" : 0});
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
		$(".main-bars").css({"opacity" : 1});
		$(".navis-wrap").stop().css({"transform": "translateX(100%)"})
		$(".navis-overlay").css({"transform": "translateX(100%)"})
		$(".tops").css({"opacity" : 1});
		$(".scr-wiper").css({"opacity" : 1});
		$(".main-indexs").css({"opacity" : 1, "visibility": "visible"});
		$(".navis-overlay").off('scroll touchmove mousewheel')},1400);
		setTimeout(function(){
		$(".navis-hidden").stop().css({"z-index": "1"})},1900);
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
	$(this).parent().css({"border" : "1px dashed #ddd"});
});
$(".aboutme2 .me-2 .prog").mouseleave(function(){
	$(this).find("img").css({"transform": "scale(1)","	filter": "opacity(0.8) saturate(0.7)"});
	$(this).parent().css({"border" : "1px dashed #fff"});
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

$(".popups").hide()


$(".page-2").click(function(){
	$(".popups").stop().show();
	$(".tag-fix").stop().hide();
	$(".main-bars").stop().hide();
	$(".bts").css({"opacity" : 0});
	$(".popup").stop().animate({"top": "0px", "opacity": 1},500)
	$(".pop-up").eq($(".page-2").index(this)).css({"opacity":1});
	$(".popups").on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
		e.stopPropagation(); 
		return false;
	})
})
$(".popup-back").click(function(e){
	$(".popup").stop().animate({"top": "80px", "opacity": 0},500)
	setTimeout(function(){
		$(".main-bars").stop().fadeIn(1000);
		$(".bts").css({"opacity" : 1});
		$(".pop-up").css({"opacity":0});
		$(".popups").stop().hide(600);
		$(".popups").off('scroll touchmove mousewheel'), 700});
		$(".tag-fix").stop().fadeIn(1200);
})


new WOW().init();



emailjs.init('user_k3S1oUvwsY2KaGrKGhKvR');

window.onload = function() {
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
		// generate the contact number value
		this.contact_number.value = Math.random() * 100000 | 0;
		emailjs.sendForm('gmail', 'contact_me', this).
		then(function(res){
			if(res.status == 200) {
				alert("연락해 주셔서 감사합니다. 확인 즉시 연락드리겠습니다.");
				document.getElementById('contact-form').reset();
			}
			else {
				alert("서버에 장애가 생겼습니다. 다시 시도해 주세요.")
			}
		});
	});
}