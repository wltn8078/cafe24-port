var lastScrollLeft = 0;
$(window).scroll(function() {
    var documentScrollLeft = $(document).scrollLeft();
    if (lastScrollLeft != documentScrollLeft) {
        console.log('scroll x');
        lastScrollLeft = documentScrollLeft;
    }
});


$(window).scroll(function(){
	var scLef = $(this).scrollLeft();
	if(scLef > 1300) {
		$("#abme-1").addClass("abme-1"); }
else{
		$("#abme-1").removeClass("abme-1");}
});


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


$(".tags").mouseover(function(){
	$(this).stop().css({"transform": "translateX(50px)"});
});
$(".tags").mouseleave(function(){
	$(this).stop().css({"transform": "translateX(100px)"});
});


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
	
	
	$(".tag-bar").click(function(){
	$(".main1 .logo").css({"opacity" : 0});
	$(".zees-logo").css({"stroke-dasharray": "2600", "stroke-dashoffset": "2600"})
	$("#zees1").removeClass('zees-1-Out');
	$("#zees2").removeClass('zees-2-Out');
	$("#zees1").addClass('zees-1');
	$("#zees2").addClass('zees-2');
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
		$(".zees-logo").css({"stroke-dasharray": "2600", "stroke-dashoffset": "0"})
		$("#zees1").removeClass('zees-1');
		$("#zees2").removeClass('zees-2');
		$("#zees1").addClass('zees-1-Out');
		$("#zees2").addClass('zees-2-Out');
		setTimeout(function(){
		$(".navis-wrap").stop().css({"transform": "translateX(100%)"})
		$(".navis-overlay").css({"transform": "translateX(100%)"})
		$("body").css({ "overflow-y": "scroll"});
		$(".main1 .logo").css({"opacity" : 1});
		$(".navis-overlay").off('scroll touchmove mousewheel')},1400);
});










new WOW().init();