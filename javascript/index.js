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
function UpdateHealth(damage) {
	let health=document.querySelector("#health");
	myhealth-=damage;
	health.style.width=myhealth+"px";
	if (myhealth<=5){ableToMove=false; ship.style.filter="hue-rotate(90deg)";}
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
let ableToMove=true;
let speed = 40;
/*
A function for getting key-inputs and working with them, is declared below.
It contains the "W, A, S, D" keys for movement.
*/
function movements(e) {
	// A
if(e.keyCode==68 && ableToMove==true){
    planetX-=speed;
    planet1.style.left=planetX+"px";
    astroid1X-=speed*1.5;
    astroid1.style.left=astroid1X+"px";
        ship.style.transform="scaleX(1)";
}	// D
else if(e.keyCode==65 && ableToMove==true){
 	planetX+=speed;
 	planet1.style.left=planetX+"px"; 
 	astroid1X+=speed*1.5;
 	astroid1.style.left=astroid1X+"px"; 
 		ship.style.transform="scaleX(-1)";
}	// S
else if(e.keyCode==87 && ableToMove==true){ 
	planetY+=speed; 
	planet1.style.top=planetY+"px"; 
	astroid1Y+=speed; 
	astroid1.style.top=astroid1Y+"px"; 
}	// W
else if(e.keyCode==83 && ableToMove==true){ 
	planetY-=speed; 
	planet1.style.top=planetY+"px"; 
	astroid1Y-=speed; 
	astroid1.style.top=astroid1Y+"px"; 
}
else if
(ableToMove==false&&e.keyCode==83||e.keyCode==87||e.keyCode==65||e.keyCode==68){
	ship1.style.animation="shake 0.5s";
  	ship1.style.animationIterationCount="infinite";
}
	// END OF KEYS
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

/*	 COLLISION DETECTION (ASTROID1)	*/
var astr1 = document.querySelector('#astroid1'),
    ship1 = document.getElementById('spaceship');
doElsCollide = function(el1, el2) {
    astr1.offsetBottom = astr1.offsetTop + astr1.offsetHeight;
    astr1.offsetRight = astr1.offsetLeft + astr1.offsetWidth;
    ship1.offsetBottom = ship1.offsetTop + ship1.offsetHeight;
    ship1.offsetRight = ship1.offsetLeft + ship1.offsetWidth;
    
    return !((astr1.offsetBottom < ship1.offsetTop) ||
             (astr1.offsetTop > ship1.offsetBottom) ||
             (astr1.offsetRight < ship1.offsetLeft) ||
             (astr1.offsetLeft > ship1.offsetRight))
};
window.setInterval(function(){
  if (doElsCollide(astr1, ship1) == true) {
  	UpdateHealth(speed/2);
  	ship1.style.animation="shake 0.5s";
  	ship1.style.animationIterationCount="infinite";
  	let asteRef=Math.floor(Math.random()*2);
  	if(asteRef==0){Math.floor(astroid1Y-=speed/3);} 
  	else if(asteRef==1){Math.floor(astroid1Y+=speed/3);} 
	astroid1.style.top=astroid1Y+"px"; 
} 
else if(doElsCollide(astr1, ship1) == false) {
	ship1.style.animation="none";
  	ship1.style.animationIterationCount="none";
}}, 200);

/*	THINGS THAT SHOULD BE DONE ONLY WHEN WEBSITE IS LOADED	*/
	// RANDOM PLANET STYLE
    let number_for_planet=Math.floor(Math.random() * 50)+1;
    planet1.className ="planetstyle"+number_for_planet;
    // FULL HEALTH-BAR SIZE
   	let healthbar = document.querySelector("#healthbar");
	let health = document.querySelector("#health");
	healthbar.style.width = window.innerWidth/7+"px";
	health.style.width = window.innerWidth/7.5+"px";
	var myhealth=health.offsetWidth;
/*		 CALLING THE FUNCTIONS		*/
planetSize();
spaceshipSize();
astroidSize();