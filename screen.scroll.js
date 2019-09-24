var page_index = 0;
var page_id = new Array();
page_id[0] = "page1"; 
page_id[1] = "page2";
page_id[2] = "page3";
page_id[3] = "page4";
var screen_height = $(window).height();
var doScroll = true;
var speed = 1000;
(function(){
	var oDiv = document.getElementById('main');
 
	function onMouseWheel(ev) {/*当鼠标滚轮事件发生时，执行一些操作*/
		var ev = ev || window.event;
		var down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
			down = ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
		if(doScroll){
			if(down){
			if(page_index!=3){
				doScroll = false;
				page_index++;
				$("#main").animate({top:-page_index*screen_height},speed,function() {
                doScroll = true;
            });//当响应向下滚动事件的时候，将doScroll设置成false，控制在这次响应过程中，不再响应其他滚轮事件，当这次事件执行结束后（1000ms后），再讲doScroll恢复成true，准备响应下次滚动。
			}
			}else{
				if(page_index!=0){
					doScroll = false;
					page_index--;
					$("#main").animate({top:-page_index*screen_height},speed,function() {
                doScroll = true;
            });
				}
			}
			if(ev.preventDefault){/*FF 和 Chrome*/
				ev.preventDefault();// 阻止默认事件
			}
		}
		
		return false;
	}
	addEvent(oDiv,'mousewheel',onMouseWheel);
	addEvent(oDiv,'DOMMouseScroll',onMouseWheel);
 
})();
function addEvent(obj,xEvent,fn) {
	if(obj.attachEvent){
		obj.attachEvent('on'+xEvent,fn);
	}else{
		obj.addEventListener(xEvent,fn,false);
	}
}