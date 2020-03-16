//控制顶部搜索栏的显示与隐藏
window.onscroll = function() {
    //获取滚动条滚动的位置
    var top = document.documentElement.scrollTop;
    //获取到顶部的div class=navigationbar
    var nav = document.getElementsByClassName('nav')[0];
    //假如top为150时，nav出现了
    if (top >= 150) {
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