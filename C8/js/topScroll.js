//控制顶部搜索栏的显示与隐藏
window.onscroll = function() {
    console.log("页面滑动了");
    //获取滚动条滚动的位置
    var top = document.documentElement.scrollTop;
    console.log(top);
    //获取到顶部的div class=navigationbar
    var nav = document.getElementsByClassName('nav')[0];
    if (top >= 100) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.height = "48px";
        nav.style.display = "block";
        nav.style.zIndex = 1000; //置顶
    } else {
        nav.style.display = "none";
        nav.style.height = "0";
    }
}