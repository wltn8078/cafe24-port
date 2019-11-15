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

$(window).scroll(function(){
	var scTop = $(this).scrollTop();
	if(scTop > 400) {
		$(".bt-top").addClass("bt-top-show");}
else{
		$(".bt-top").removeClass("bt-top-show");}
});
$(".bt-top").click(function(){
	$("html, body").stop().animate({"scrollTop":0},500);
})

var workSlide = new FxSlide({
	slides : $(".bans"), 
	cnt:1, 
	speed : 1000,
	delay : 4000,
	pager: $(".pagers")
});

$(".navi").mouseenter(function(){
$(".subs, .sub-navi").css({"visibility" : "visible", "opacity": 1});
$(this).find(".angle").css({"visibility" : "visible", "opacity": 1});
});
$(".navi").mouseleave(function(){
	$(".subs, .sub-navi").css({"visibility" : "hidden", "opacity": 0});
	event.stopPropagation();
	$(this).find(".angle").css({"visibility" : "hidden", "opacity": 0});
});

