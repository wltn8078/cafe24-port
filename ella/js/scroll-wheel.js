window.addEventListener("wheel", function(){event.preventDefault();}, {passive: false});
document.querySelectorAll(".page").forEach(function(page, key) {
	page.addEventListener("wheel", wheelFn, {passive: false});
})
function wheelFn(){
	event.preventDefault();
	event.stopPropagation();
	var hei = $(window).outerHeight(); //한 페이지의 높이
	var delta = event.deltaY; //휠 이벤트 값
	var posY = event.pageY; 	// 모든 창의 값
	var n = Math.floor(posY/hei); // 현제 페이지 값 , 창의 값에 한페이지 높이를 나눠서 소수점을 없앤다 [0~3]
	var tar = 0;
	var pageCnt = $(".page").length; //4 전체 페이지 수


//  (조건) ? 참 : 거짓
//아래로 휠
	if(delta > 0) ( n < pageCnt - 1) ? wheelAni((n + 1) * hei, n, (n + 1)): "";
// 휠 값이 0보다 크고, (현제 페이지 값보다 (전체 페이지 수-1) 이 크다)이라면,  = (조건)
//  wheelAni에 (현제 페이지 값 + 1) X 한 페이지 높이 / 현제 페이지 값 / (현제 페이지 값 + 1) 를 준다.

//위로 휠
else (n > 0) ? wheelAni((n - 1) * hei, n, (n - 1)) : ""; 
// (현제 페이지 값이 0보다 크다 )이라면,  = (조건)
//  wheelAni에 (현제 페이지 값 - 1) X 한 페이지 높이 / 현제 페이지 값 / (현제 페이지 값 - 1) 를 준다.
}
	function wheelAni(pos, prePage, nowPage) { //위에 값을 pos, prePage, nowPage에 넣고,
		console.log(prePage, nowPage)            //콘솔에 이전의 페이지와 다음(현재)의 페이지 값을 넣는다
		$("html, body").stop().animate({"scrollTop": pos},1000, function(){

		}); //scrollTop을 pos값만큼 지정한다
	}