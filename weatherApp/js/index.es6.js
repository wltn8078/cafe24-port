//전역변수선언
var key = '448c8a19acf3765251ac11266bcb33af';
var units = 'metric';
var dailyAPI = 'http://api.openweathermap.org/data/2.5/weather';
var weeklyAPI = 'http://api.openweathermap.org/data/2.5/forecast';
//http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=448c8a19acf3765251ac11266bcb33af&units=metric
var cityURL = '../json/city.json';
var dailyURL = dailyAPI + '?appid=' + key + '&units=' + units;
var weeklyURL = weeklyAPI + '?appid=' + key + '&units=' + units;

// 프로그램 시작
init();
function init() {
	wrapChg("M");
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = cityFn;
	ajax.open('GET', cityURL, true);
	ajax.send();
}

//화면 show/hide
function wrapChg(type){
	switch (type) {
		case "D":
			 document.querySelector(".wrap-daily").classList.add("d-block");
			 document.querySelector(".wrap-daily").classList.remove("d-none");
			 document.querySelector(".wrap-weekly").classList.add("d-none");
			 document.querySelector(".wrap-weekly").classList.remove("d-block");
			 document.querySelector(".wrap-main").classList.add("d-none");
			 document.querySelector(".wrap-main").classList.remove("d-block");
			 break;
		case "W":
			 document.querySelector(".wrap-daily").classList.add("d-none");
			 document.querySelector(".wrap-daily").classList.remove("d-block");
			 document.querySelector(".wrap-weekly").classList.add("d-block");
			 document.querySelector(".wrap-weekly").classList.remove("d-none");
			 document.querySelector(".wrap-main").classList.add("d-none");
			 document.querySelector(".wrap-main").classList.remove("d-block");
			 break;
		default:
			 document.querySelector(".wrap-daily").classList.add("d-none");
			 document.querySelector(".wrap-daily").classList.remove("d-block");
			 document.querySelector(".wrap-weekly").classList.add("d-none");
			 document.querySelector(".wrap-weekly").classList.remove("d-block");
			 document.querySelector(".wrap-main").classList.add("d-block");
			 document.querySelector(".wrap-main").classList.remove("d-none");
			 break;
 }

}

// 도시 정보 가져오기
function cityFn() {
	if(this.readyState == 4 && this.status == 200) {
		var _city = document.querySelector("#cities");
		var res = JSON.parse(this.responseText).cities;
		var _elem = document.createElement('option');
		var title = document.createTextNode('Choose a city');
		_elem.appendChild(title);
		_elem.setAttribute("value", "");
		_elem.setAttribute("selected", "selected");
		_city.innerHTML = "";
		_city.appendChild(_elem);
		//<option value="" selected>도시를 선택해 주세요.</option>
		for(var i in res) {
			_elem = document.createElement('option');
			title = document.createTextNode(res[i].name);
			_elem.setAttribute("value", res[i].id);
			_elem.appendChild(title);
			_city.appendChild(_elem);
		}
		_city.addEventListener("change", function(){
			var ajax = new XMLHttpRequest();
			ajax.onreadystatechange = dailyFn;
			ajax.open('GET', dailyURL+"&id="+this.value, true);
			ajax.send();
		});
	}
}

// 데일리정보 가져오기
function dailyFn() {
	if (this.readyState == 4 && this.status == 200) {
		let res = JSON.parse(this.responseText);
		let iconSrc = `../img/icon/${res.weather[0].icon}.png`;
		let temp = `Current Temp - <b>${res.main.temp}</b>°C&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;`;
		let desc = `Current weather - <b>${res.weather[0].main}</b>`;
		let _wrap = document.querySelector(".wrap-daily");
		let _title = document.createElement("div");
		let _img = document.createElement("div");
		let _temp = document.createElement("span");
		let _desc = document.createElement("span");
		_title.innerHTML = 'Today Weather';
		_img.innerHTML = `<img src="${iconSrc}" class="w-50">`
		_temp.innerHTML = temp;
		_desc.innerHTML = desc;
		_title.setAttribute("class", "text-center py-3 fa-2x")
		_img.setAttribute("class", "text-center py-5 ")
		_temp.setAttribute("class", "text-center py-3 d-inline-block f-1")
		_desc.setAttribute("class", "text-center py-3 d-inline-block f-1")
		_wrap.appendChild(_title);
		_wrap.appendChild(_img);
		_wrap.appendChild(_temp);
		_wrap.appendChild(_desc);
		wrapChg("D");

	}
}

