function spaceshipSize() {
	let ship = document.querySelector('#spaceship');
	ship.style.width=window.innerWidth/6.66666666+"px";
	ship.style.height=window.innerWidth/12+"px";
	ship.style.left=window.innerWidth/2-ship.offsetWidth/2+"px";
	ship.style.top=window.innerHeight/2-ship.offsetHeight/2+"px";
}
function planetSize() {
	let world = document.querySelector('#planet');
	world.style.width=window.innerWidth/8+"px";
	world.style.height=window.innerWidth/8+"px";
}
function healthbarSize() {
	let healthbar = document.querySelector("#healthbar");
	let health = document.querySelector("#health");
	healthbar.style.width = window.innerWidth/7+"px";
	health.style.width = window.innerWidth/7.5+"px";
}
//    MOVEMENTS
var ship = document.querySelector('#spaceship');
var planet1 = document.querySelector("#planet");
var planetX = window.innerWidth;
var planetY = 50;
let speed = 40;
function movements(e) {
	
         if(e.keyCode==68){ planetX-=speed; planet1.style.left=planetX+"px"; ship.style.transform = "scaleX(1)"; }
    else if(e.keyCode==65){ planetX+=speed; planet1.style.left=planetX+"px"; ship.style.transform = "scaleX(-1)";}
    else if(e.keyCode==87){ planetY+=speed; planet1.style.top=planetY+"px"; }
    else if(e.keyCode==83){ planetY-=speed; planet1.style.top=planetY+"px"; }
    randomPlanet();
}
planet1.style.left=planetX+"px";
document.onkeydown = movements;

//  RANDOM SPWNING OF PLANET AND OTHER STUFF.
function randomPlanet() {
	let planetleft="-"+window.innerWidth*2;
	let planetright=window.innerWidth*2;
	//	LEFT
	if (planetX<=planetleft) {
		planetX=window.innerWidth+50;
		planet1.style.left=planetX+"px";
        let number_for_planet=Math.floor(Math.random() * 50)+1;
        planet1.className ="planetstyle"+number_for_planet;
	}
	//	RIGHT
	else if (planetX>=planetright) {
		planetX=window.innerWidth+50;
		planet1.style.left="10px";
        let number_for_planet=Math.floor(Math.random() * 50)+1;
        planet1.className ="planetstyle"+number_for_planet;
	}
}

/*	THINGS THAT SHOULD BE DONE ONLY WHEN WEBSITE LOADS	*/

    let number_for_planet=Math.floor(Math.random() * 50)+1;
    planet1.className ="planetstyle"+number_for_planet;

planetSize();
spaceshipSize();
healthbarSize();




// 						TEST ---->>

let plat = window.innerHeight;
let panel=document.querySelector("#panel");
panel.style.top = plat-150+"px";