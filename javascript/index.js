function spaceshipSize() {
	let ship = document.querySelector('#spaceship');
	ship.style.width=window.innerWidth/6.66666666+"px";
	ship.style.height=window.innerWidth/12+"px";
}
function planetSize() {
	let world = document.querySelector('#planet');
	world.style.width=window.innerWidth/8+"px";
	world.style.height=window.innerWidth/8+"px";
}

//    MOVEMENTS
var ship = document.querySelector('#spaceship');
var planet1 = document.querySelector("#planet");
var planetX = window.innerWidth;
var planetY = 0;
let speed = 5;
function movements(e) {
	
         if(e.keyCode==68){ planetX-=speed; planet1.style.left=planetX+"px"; ship.style.transform = "scaleX(1)";}
    else if(e.keyCode==65){ planetX+=speed; planet1.style.left=planetX+"px"; ship.style.transform = "scaleX(-1)";}
    else if(e.keyCode==87){ planetY+=speed; planet1.style.top=planetY+"px"; }
    else if(e.keyCode==83){ planetY-=speed; planet1.style.top=planetY+"px"; }
}
planet1.style.left=planetX+"px";
document.onkeydown = movements;
planetSize();
spaceshipSize();