document.onmousemove = handlerMM;

function handlerMM(e)
{
var dx = 0;
var dy = 0;
var fact = 2;
var opp = 70;

var x = (e)?e.pageX:event.x;
var y = (e)?e.pageY:event.y;

dx = (e)?0:window.document.body.scrollLeft;
dy = (e)?0:window.document.body.scrollTop; 

var x1 = (x + dx) * fact;	// левая край
var y1 = (y + dy) * fact;	// верхний край
var x2 = 2 * opp + (x + dx) * fact;	// правый край
var y2 = 2 * opp + (y + dy) * fact;	// нижний край

document.getElementById("glass").style.left = (x + dx) * (1 - fact);
document.getElementById("glass").style.top = (y + dy) * (1 - fact);
document.getElementById("glass").style.clip = "rect(" +y1 +"px," +x2 +"px," +y2 +"px,"+x1 +"px)";

}

document.getElementById('nav').onmouseover = function(event) {
    var target = event.target;
    if (target.className == 'row') {
    var menu_disclaimer = target.getElementsByClassName('menu');
    closeMenu();
    menu_disclaimer[0].style.display='block';
    }
} 

document.onmouseover=function (event) {
    var target = event.target;
    console.log(event.target);
    if (target.className!= 'row' && target.className!='menu') {
        close_menu();
    }

}

function close_menu() {
    var  nav = document.getElementById('nav');
    var menu = document.getElementsByClassName('menu');
    for (var i=0; i<menu.length; i++) {
        menu[i].style.display="none";
    }
}

function onclick_img (){
    var pointer = document.getElementsByClassName('pointer');
    var phoneimg = document.getElementById('example');

    if (pointer) {
phoneimg.src = pointer.src;
    }
return onclick_img();
}