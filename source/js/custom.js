function on_DOM_ready () {
    var header = document.getElementById("page-header");
    if(!header) return;
    //获取page-header

    var SCROLL_TRIGGER = 100;

    function scroll_handle() {
        if(window.scrollY > SCROLL_TRIGGER){
            header.classList.add("blur-banner");
        }else{
            header.classList.remove("blur-banner");
        }
    }
    //定义判定blur-banner的函数

    window.addEventListener('scroll',scroll_handle);
    //监听器持续运行：当滚动时，判定一次逻辑


    scroll_handle();    
    //在判定之外调用一次，即在生成网页或刷新时判定一次，确保静止时状态正确
}
document.addEventListener('DOMContentLoaded',on_DOM_ready);