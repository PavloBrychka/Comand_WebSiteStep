let memu_v = false;
var menu = document.getElementById("p_show_menu");
var logo_c = document.getElementById("logo_menu");
var body = document.getElementById("body");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");
var kr = document.getElementById("back_m");
var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var b = document.getElementById("b1");
let skr = true;
setTimeout(() => {
    if(skr == true)
    {
        p_r2();
    } else{
        p_r1();
    }
}, 5000);
function menu_show(){
    if(memu_v == true){
        line1.style.top = `${17}px`;
        line2.style.top = `${23}px`;
        line3.style.top = `${29}px`;
        kr.style.top = `${-100}px`;
        menu.style.left = `${-1380}px`;
        memu_v = false;
        body.style.overflowY = "auto";
    } else{
        line1.style.top = `${-10}px`;
        line2.style.top = `${-10}px`;
        line3.style.top = `${-10}px`;
        kr.style.top = `${0}px`;
        menu.style.left = `${70}px`;
        memu_v = true;
        body.style.overflowY = "hidden";
    }
}
function p_r2(){
    page1.style.marginLeft = "-1450px";
    b.textContent = "2";
    skr = false;
}
function p_r1(){
    page1.style.marginLeft = "0px";
    b.textContent = "1";
    skr = true;
}


