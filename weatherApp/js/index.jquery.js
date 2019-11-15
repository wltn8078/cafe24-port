// 전역변수선언
var cityId;
var key = '448c8a19acf3765251ac11266bcb33af';
var units = 'metric';
var dailyAPI = 'https://api.openweathermap.org/data/2.5/weather';
var weeklyAPI = 'https://api.openweathermap.org/data/2.5/forecast';
//https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=448c8a19acf3765251ac11266bcb33af&units=metric
var cityURL = '../json/city.json';
var dailyURL = dailyAPI + '?appid=' + key + '&units=' + units;
var weeklyURL = weeklyAPI + '?appid=' + key + '&units=' + units;


// 프로그램 시작
init();

function init() {
	wrapChg("M");
	$.ajax({
		type: "get",
		url: cityURL,
		dataType: "json",
		success: cityFn
	});
}
$(".navi > li").click(function () {
	if ($(this).index() == 0) init();
	else if ($(this).index() == 1) wrapChg("D");
	else wrapChg("W");
});
//화면 show/hide
function wrapChg(type) {
	if (type == 'D') {
		$(".navi > li").removeClass("navi-sel");
		$(".navi > li").eq(1).addClass("navi-sel");
		$(".wrap-daily").show();
		$(".wrap-weekly").hide();
		$(".wrap-main").hide();
	} else if (type == 'W') {
		$(".navi > li").removeClass("navi-sel");
		$(".navi > li").eq(5).addClass("navi-sel");
		$(".wrap-daily").hide();
		$(".wrap-weekly").show();
		$(".wrap-main").hide();
	} else {
		$(".wrap-daily").hide();
		$(".wrap-weekly").hide();
		$(".wrap-main").show();
	}
}


// 도시정보 가져오기
function cityFn(res) {
	var cities = res.cities;
	$("#cities").empty();
	$("#cities").append('<option value="" selected>Choose a city</option>');
	for (var i in cities) {
		$("#cities").append('<option value="' + cities[i].id + '">' + cities[i].name + '</option>');
	}
	$("#cities").change(function () {
		cityId = $(this).val();
		$.ajax({
			type: "get",
			url: dailyURL + "&id=" + cityId,
			dataType: "json",
			success: dailyFn
		});
		$.ajax({
			type: "get",
			url: weeklyURL + "&id=" + cityId,
			dataType: "json",
			success: weeklyFn
		});
	});
}

// 데일리정보 가져오기
function dailyFn(res) {
	//console.log(res);
	var $d = $(".wrap-daily > .conts");
	$d.empty();
	// $d.append(res.base+'<br>');	// $d.append(res.clouds.all+'<br>');
	// $d.append(res.main.temp+'<br>');
	// $d.append(res.weather[0].description+'<br>');
	$d.append('<div class="text-center fa-2x py-3"><b>Today Weather</b></div>')
	$d.append('<div class="text-center py-4"><img src="../img/icon/' + res.weather[0].icon + '.png" style="width: 200px;"></div>')
	$d.append('<div class="Temp text-center" style="font-size: 20px;">Current Temp&nbsp;&nbsp;<b>' + res.main.temp + '</b>°C<br> Current weather&nbsp;&nbsp;<b>' + res.weather[0].main + '</div>')
	wrapChg("D");
}

//위클리정보 가져오기
  function weeklyFn(res) {
	console.log(new Date());
	console.log(res);
	var html = '';
	var $w = $(".wrap-weekly > .conts");
	$w.empty(); 
	for(var v of res.list){
		html = `
		<li class="w-item">
		<div>
			<img src="../img/icon/${v.weather[0].icon}.png" class="w-100">
		</div>
		<ul>
			<li class="w-temp">
				<span>${v.main.temp}</span>°C
			</li>
			<li class="w-desc">
				<span>${v.weather[0].main}</span>
				<span>${v.weather[0].description}</span>
			</li>
			<li class="w-date">${v.dt_txt}</li>
		</ul>
		</li>`;
		$w.append(html);
	}
}
