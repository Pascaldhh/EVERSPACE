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
function asteroidSize() {
	let ast1 = document.querySelector('#asteroid1');
	ast1.style.width=window.innerWidth/18+"px";
	ast1.style.height=window.innerWidth/18+"px";
}
function sidemenuSize() {
	menu.style.width=window.innerWidth/6+"px";
}
function menubuttonSize() {
	let button=document.querySelector("#menubutton");
	button.style.width=window.innerWidth/20+"px";
	button.style.height=window.innerWidth/24+"px";
}
function UpdateHealth(damage) {
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
var asteroid1=document.querySelector("#asteroid1");
var planetX=window.innerWidth+Math.floor(Math.random() * 500);
var asteroid1X=window.innerWidth*2;
var planetY=Math.floor(Math.random()* window.innerHeight);
var asteroid1Y=Math.floor(Math.random()* window.innerHeight);
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
    asteroid1X-=speed*1.5;
    asteroid1.style.left=asteroid1X+"px";
        ship.style.transform="scaleX(1)";
}	// D
else if(e.keyCode==65 && ableToMove==true){
 	planetX+=speed;
 	planet1.style.left=planetX+"px"; 
 	asteroid1X+=speed*1.5;
 	asteroid1.style.left=asteroid1X+"px"; 
 		ship.style.transform="scaleX(-1)";
}	// S
else if(e.keyCode==87 && ableToMove==true){ 
	planetY+=speed; 
	planet1.style.top=planetY+"px"; 
	asteroid1Y+=speed; 
	asteroid1.style.top=asteroid1Y+"px"; 
}	// W
else if(e.keyCode==83 && ableToMove==true){ 
	planetY-=speed; 
	planet1.style.top=planetY+"px"; 
	asteroid1Y-=speed; 
	asteroid1.style.top=asteroid1Y+"px"; 
}
else if
(ableToMove==false&&e.keyCode==83||e.keyCode==87||e.keyCode==65||e.keyCode==68){
	ship1.style.animation="shake 0.5s";
  	ship1.style.animationIterationCount="infinite";
}
	// END OF KEYS
    randomPlanet();
    randomAsteroid1();
}
planet1.style.left=planetX+"px";
planet1.style.top=planetY+"px";
asteroid1.style.left=asteroid1X+"px";
asteroid1.style.top=asteroid1Y+"px";
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
	//	LEFT
	if (planetX<=planetleft) {
		planetX=window.innerWidth+Math.floor(Math.random()* 500);
		planet1.style.left=planetX+"px";
		planetY=Math.floor(Math.random()* window.innerHeight);
		planet1.style.top=planetY+"px";
        let number_for_planet=Math.floor(Math.random() * 50)+1;
        planet1.className ="planetstyle"+number_for_planet;
	}
}
function randomAsteroid1() {
	let asteroid1left="-"+window.innerWidth*2;
	//	LEFT
	if (asteroid1X<=asteroid1left) {
		asteroid1X=window.innerWidth+Math.floor(Math.random()* 200);
		asteroid1.style.left=asteroid1X+"px";
		asteroid1Y=Math.floor(Math.random()* window.innerHeight);
		asteroid1.style.top=asteroid1Y+"px";
	}
}

/*	 COLLISION DETECTION (ASTEROID1)	*/
var astr1 = document.querySelector('#asteroid1'),
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
  	if(asteRef==0){Math.floor(asteroid1Y-=speed/3);} 
  	else if(asteRef==1){Math.floor(asteroid1Y+=speed/3);} 
	asteroid1.style.top=asteroid1Y+"px"; 
} 
else if(doElsCollide(astr1, ship1) == false) {
	ship1.style.animation="none";
  	ship1.style.animationIterationCount="none";
}}, 200);
/*	 ENTER OR EXIT FULL SCREEN	*/
// NO NEED TO MODIFY THIS CODE IT WILL BE THE SAME FOREVER.
var btnnum=1;
function view() {
	if (btnnum==1){openFullscreen(); btnnum++;}
	else if (btnnum==2){closeFullscreen(); btnnum--;}
	menuitems();
}
var screen = document.documentElement;
function openFullscreen() {
  if (screen.requestFullscreen) {
    screen.requestFullscreen();
  } else if (screen.webkitRequestFullscreen) { /* Safari */
    screen.webkitRequestFullscreen();
  } else if (screen.msRequestFullscreen) { /* IE11 */
    screen.msRequestFullscreen();
  }item1.innerHTML="Exit full screen";}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }item1.innerHTML="Enter full screen";}

  /*	SIDE MENU	(this code needs to be refactored)*/
let menunumber=1;
  	let menu=document.querySelector("#sidemenu");
  	let menubutton=document.querySelector("#menubutton");
function showMenu() {item6.classList.toggle("sidemenuItem");
	if(menunumber==0){menu.style.opacity=1;
		menu.style.right=0+"px";menunumber++;
		menubutton.style.right=0+menu.offsetWidth-menubutton.offsetWidth-5+"px";
		menubutton.style.backgroundImage="url('../images/UI/menubutton2.png')";
	}
	else{menu.style.opacity=0;
		menubutton.style.backgroundImage="url('../images/UI/menubutton.png')";
		menu.style.right=0-menu.offsetWidth+"px";menunumber--;
		menubutton.style.right=0;
	}exitnumber=0;
}
function exit() {
	if (exitnumber==0){item6.classList.toggle("sidemenuexitbutton"); exitnumber=1;}
	else{window.location='../main-menu.html';exitnumber=0;}
}
function menuitems(){
	let menubuttonheight=menubutton.offsetHeight+item1.offsetHeight/4;
	item1.style.top=menubuttonheight+"px";
	item2.style.top=menubuttonheight+item1.offsetHeight+"px";
	item3.style.top=menubuttonheight+item1.offsetHeight*2+"px";
	item4.style.top=menubuttonheight+item1.offsetHeight*3+"px";
	item5.style.top=menubuttonheight+item1.offsetHeight*4+"px";
	item6.style.top=menubuttonheight+item1.offsetHeight*5+"px";
	//	 FONT SIZE
	item1.style.fontSize=item1.offsetHeight/3+"px";
	item2.style.fontSize=item1.offsetHeight/2.5+"px";
	item3.style.fontSize=item1.offsetHeight/2+"px";
	item4.style.fontSize=item1.offsetHeight/2+"px";
	item5.style.fontSize=item1.offsetHeight/2+"px";
	item6.style.fontSize=item1.offsetHeight/3+"px";
	//	 CENTER ALIGNING
	item1.style.lineHeight=item1.offsetHeight+"px";
	item2.style.lineHeight=item1.offsetHeight+"px";
	item3.style.lineHeight=item1.offsetHeight+"px";
	item4.style.lineHeight=item1.offsetHeight+"px";
	item5.style.lineHeight=item1.offsetHeight+"px";
	item6.style.lineHeight=item1.offsetHeight+"px";
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
	var myhealth=health.offsetWidth;
	menu.style.right=0-menu.offsetWidth+"px";
	let item1 = document.querySelector(".item1");
	let item2 = document.querySelector(".item2");
	let item3 = document.querySelector(".item3");
	let item4 = document.querySelector(".item4");
	let item5 = document.querySelector(".item5");
	let item6 = document.querySelector(".item6");
	let exitnumber=0;
/*		 CALLING THE FUNCTIONS		*/	
showMenu();
planetSize();
spaceshipSize();
asteroidSize();
menubuttonSize();
sidemenuSize();
menuitems();