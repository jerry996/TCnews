// 搜索框
var input = document.getElementById('inp');
var submit = document.getElementById('submit');
var ul = document.getElementById('search-ul');

input.onkeyup = function () {
	var script = document.createElement('script');
	script.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+inp.value+'&cb=callback'
	document.body.appendChild(script);
	document.body.removeChild(script);
}
submit.onclick = function () {
	window.open('https://www.baidu.com/s?&wd='+input.value+'');
}

//如果用input.onblur事件，点击联想词ul就会消失，不能跳转到页面。
//把点击事件绑定到document上，先执行点击操作后冒泡，点击的时候ul不会消失，就可以跳转到响应的页面。
document.onclick = function () {
	ul.style.display = 'none'
	// console.log(3)
}
// input.onfocus = function() {
// 	console.log(1)
// }
// input.onblur = function() {
// 	ul.style.display = 'none';
// 	console.log(2)
// }

function callback(data) {
	if(data.s.length !== 0) {
		var value = data.s;
		ul.innerHTML = '';
		value.forEach(function (item, index) {
			var li = document.createElement('li');
			var a = document.createElement('a');
			ul.appendChild(li);
			li.appendChild(a);
			a.innerHTML = item;
			a.href = 'https://www.baidu.com/s?&wd='+item+'';
		})
		ul.style.display = 'block'
	}else{
		ul.style.display = 'none'
	}
	
}



// 加载新闻

function Ajax() {
	var xml = new XMLHttpRequest();
	xml.open('GET', './getNews.php', true);
	xml.send();
	xml.onreadystatechange = function () {
		if(xml.readyState === 4) {
			if(xml.status == 200) {
				cb(xml.responseText);
			}else{
				alert('error')
			}
		}
	}
}

//回调函数处理数据
var body = document.getElementsByTagName('body')[0];
var button = document.getElementsByTagName('button')[0];
var main = document.getElementsByClassName('main')[0];
function cb(data) {
	var arr = JSON.parse(data);//转换为数组对象

	arr.forEach(function (item, index) {

	

		var divWrap = document.createElement('div');
		var divBox = document.createElement('div');
		var img = document.createElement('img');
		var span = document.createElement('span');

		main.insertBefore(divWrap, button);
		divWrap.appendChild(divBox);
		divBox.appendChild(img);
		divWrap.appendChild(span);

		divWrap.setAttribute('class', 'news');
		divBox.setAttribute('class', 'wrapper');
		img.src = item.img;

		span.innerText = item.title;

	})
}



//点击按钮执行Ajax，从后台获取内容异步更新页面
button.onclick = function () {
	if(window.pageYOffset < 1500) {
		Ajax()
	}
	// console.log(window.pageYOffset)

	if(window.pageYOffset > 1300){
		button.innerText = '没有更多资源';
	}
}

