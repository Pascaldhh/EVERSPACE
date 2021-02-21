function spaceshipSize() {
	let ship = document.querySelector('#spaceship');
	ship.style.width=window.innerWidth/6.66666666+"px";
	ship.style.height=window.innerWidth/12+"px";
	ship.style.left=window.innerWidth/2-ship.offsetWidth/2+"px";
	ship.style.top=window.innerHeight/2-ship.offsetHeight/2+"px";
}
function planetSize() {
	let world = document.querySelector('#planet');
	world.style.width=window.innerWidth/9+"px";
	world.style.height=window.innerWidth/9+"px";
}
function astroidSize() {
	let ast1 = document.querySelector('#astroid1');
	ast1.style.width=window.innerWidth/18+"px";
	ast1.style.height=window.innerWidth/18+"px";
}
function UpdateHealth() {
	let health=document.querySelector("#health");
}
//    MOVEMENTS
/*
First of all, all the DIVs are imported from HTML file, in form of variables.
Then two variables are created for each of the DIV (position X & position Y).
EXAMPLE:
		variable "Planet" is created. Then two other variabels planetX & planetY,
		are created for the positioning of the planet.
*/
var ship=document.querySelector('#spaceship');
var planet1=document.querySelector("#planet");
var astroid1=document.querySelector("#astroid1");
var planetX=window.innerWidth+Math.floor(Math.random() * 500);
var astroid1X=window.innerWidth*2;
var planetY=Math.floor(Math.random()* window.innerHeight);
var astroid1Y=Math.floor(Math.random()* window.innerHeight);
let speed = 40;
/*
A function for getting key-inputs and working with them, is declared below.
It contains the "W, A, S, D" keys for movement.
*/
function movements(e) {
	// A
if(e.keyCode==68){
    planetX-=speed;
    planet1.style.left=planetX+"px";
    astroid1X-=speed*1.5;
    astroid1.style.left=astroid1X+"px";
        ship.style.transform="scaleX(1)";
}	// D
else if(e.keyCode==65){
 	planetX+=speed;
 	planet1.style.left=planetX+"px"; 
 	astroid1X+=speed*1.5;
 	astroid1.style.left=astroid1X+"px"; 
 		ship.style.transform="scaleX(-1)";
}	// S
else if(e.keyCode==87){ 
	planetY+=speed; 
	planet1.style.top=planetY+"px"; 
	astroid1Y+=speed; 
	astroid1.style.top=astroid1Y+"px"; 
}	// W
else if(e.keyCode==83){ 
	planetY-=speed; 
	planet1.style.top=planetY+"px"; 
	astroid1Y-=speed; 
	astroid1.style.top=astroid1Y+"px"; 
}	// END OF KEYS
    randomPlanet();
    randomAstroid1();
}
planet1.style.left=planetX+"px";
planet1.style.top=planetY+"px";
astroid1.style.left=astroid1X+"px";
astroid1.style.top=astroid1Y+"px";
document.onkeydown = movements;

/*  RANDOM SPWNING OF PLANET AND OTHER STUFF.

When a planet reaches a specific point (in X axis of the planet)
then the planet will reposition it self.
EXAMPLE:
		when the planet's X axis is -5000, while you are moving to the right,
		then it will position its self on 5000 X axis.It will make the player
		think that the a new planet generates when you move forward,
		while it will be the same DIV positioning its self again and again.
*/
function randomPlanet() {
	let planetleft="-"+window.innerWidth*2;
	let planetright=window.innerWidth*2;
	//	LEFT
	if (planetX<=planetleft) {
		planetX=window.innerWidth+Math.floor(Math.random()* 500);
		planet1.style.left=planetX+"px";
		planetY=Math.floor(Math.random()* window.innerHeight);
		planet1.style.top=planetY+"px";
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
function randomAstroid1() {
	let astroid1left="-"+window.innerWidth*2;
	let astroid1right=window.innerWidth*2;
	//	LEFT
	if (astroid1X<=astroid1left) {
		astroid1X=window.innerWidth+Math.floor(Math.random()* 200);
		astroid1.style.left=astroid1X+"px";
		astroid1Y=Math.floor(Math.random()* window.innerHeight);
		astroid1.style.top=astroid1Y+"px";
	}
	//	RIGHT
	else if (astroid1X>=astroid1right) {
		astroid1X=window.innerWidth+50;
		astroid1.style.left="10px";
	}
}
/*	THINGS THAT SHOULD BE DONE ONLY WHEN WEBSITE IS LOADED	*/
	// RANDOM PLANET STYLE
    let number_for_planet=Math.floor(Math.random() * 50)+1;
    planet1.className ="planetstyle"+number_for_planet;
    // FULL HEALTH-BAR SIZE
   	let healthbar = document.querySelector("#healthbar");
	let health = document.querySelector("#health");
	healthbar.style.width = window.innerWidth/7+"px";
	health.style.width = window.innerWidth/7.5+"px";

/*		 CALLING THE FUNCTIONS		*/
planetSize();
spaceshipSize();
astroidSize();