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
function UpdateFuel(arg) {
	myfuel-=arg;
	fuel.style.width=myfuel+"px";
	if (myfuel<=0){ableToMove=false; ship.style.filter="grayscale(100%)";}
	else if (myfuel>0){ableToMove=true; ship.style.filter="none";}
}
function gearSize() {
	let geartxt = document.querySelector("samp");
	geartxt.style.fontSize=window.innerWidth/35+"px";
	let gearhandle=document.querySelector("#gearhandle");
	gearhandle.style.borderBottom=gearhandle.offsetHeight/2+"px solid #282923";
	gearhandle.style.fontSize=gearhandle.offsetHeight/4+"px";
}
function unitsbarSize(){
	let unitsbar = document.querySelector("#unitsbar");
	unitsbar.style.left=healthbar.offsetWidth+"px";
}
function scanpanelSize() {
	let scanpanel = document.querySelector("#scanpanel");
	scanpanel.style.width=scanpanel.offsetHeight+"px";
	let scan = document.querySelector("#scan");
	scan.style.top=scanpanel.offsetHeight/20+"px";
	scan.style.left=scanpanel.offsetWidth/20+"px";
	scan.style.height="90%";
	scan.style.width=scan.offsetHeight+"px";
}
function buttonSize() {
	let inventoryButton = document.querySelector("#inventorybutton");
	inventorybutton.style.height="9%";
	inventoryButton.style.width=inventoryButton.offsetHeight+"px";
	inventoryButton.style.left=window.innerWidth-inventoryButton.offsetWidth+"px";
	inventoryButton.style.top=window.innerHeight-scanpanel.offsetHeight-
	inventoryButton.offsetHeight+"px";
	let useitembutton=document.querySelector("#useitembutton");
	useitembutton.style.fontSize=window.innerWidth/48+"px";
	let helpbutton = document.querySelector("#helpbutton");
	helpbutton.style.height=inventorybutton.offsetHeight+"px";
	helpbutton.style.width=inventorybutton.offsetHeight+"px";
	let Inum=inventorybutton.offsetHeight;
	helpbutton.style.top=inventorybutton.offsetTop+"px";
	helpbutton.style.left=inventorybutton.offsetLeft-helpbutton.offsetWidth+"px";
}
//	  GAME ITEMS AND STUFF
let inventory={

		Units: 200,
		Fuel: 5,
		Tools:2,

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
let speed = 10;let Enum=1;
/*
A function for getting key-inputs and working with them, is declared below.
It contains the "W, A, S, D" keys for movement.
*/
function movements(e) {
	// D
if(e.keyCode==68 && ableToMove==true){
    planetX-=speed;
    planet1.style.left=planetX+"px";
    asteroid1X-=speed*1.5;
    asteroid1.style.left=asteroid1X+"px";
        ship.style.transform="scaleX(1)";
    UpdateFuel(speed/120);
}	// A
else if(e.keyCode==65 && ableToMove==true){
 	planetX+=speed;
 	planet1.style.left=planetX+"px"; 
 	asteroid1X+=speed*1.5;
 	asteroid1.style.left=asteroid1X+"px"; 
 		ship.style.transform="scaleX(-1)";
    UpdateFuel(speed/120);
}	// W
else if(e.keyCode==87 && ableToMove==true){ 
	planetY+=speed; 
	planet1.style.top=planetY+"px"; 
	asteroid1Y+=speed; 
	asteroid1.style.top=asteroid1Y+"px"; 
	UpdateFuel(speed/120);
}	// S
else if(e.keyCode==83 && ableToMove==true){ 
	planetY-=speed; 
	planet1.style.top=planetY+"px"; 
	asteroid1Y-=speed; 
	asteroid1.style.top=asteroid1Y+"px"; 
	UpdateFuel(speed/120);
}	// E
else if(e.keyCode==69){
	if(Enum==1){showInventory();Enum=2;} 
	else if(Enum==2){closeInventory();Enum=1;}
}	// SPACE
else if(e.keyCode==32){
	changeGear();
}
else if(myfuel<=0&&e.keyCode==83||e.keyCode==87||e.keyCode==65||e.keyCode==68){
	ship1.style.animation="lessFuel 0.5s";
  	ship1.style.animationIterationCount="infinite";
}
else if
(myhealth<=5&&e.keyCode==83||e.keyCode==87||e.keyCode==65||e.keyCode==68){
	ship1.style.animation="shake 0.5s";
  	ship1.style.animationIterationCount="infinite";
}
	// END OF KEYS
    randomPlanet();
    randomAsteroid1();//alert(e.keyCode);

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
	let chance = Math.floor(Math.random() * 350);
	if (chance==3){
	let planetleft="-"+window.innerWidth*2;
	//	LEFT
	if (planetX<=planetleft) {
		planetX=window.innerWidth+Math.floor(Math.random()* 500);
		planet1.style.left=planetX+"px";
		planetY=Math.floor(Math.random()* window.innerHeight);
		planet1.style.top=planetY+"px";
        let number_for_planet=Math.floor(Math.random() * 50)+1;
        planet1.style.backgroundImage="url('../images/planets/"+number_for_planet+".png')";
	}//  RIGHT
	else if (planetX>=window.innerWidth*2) {
		planetX=-window.innerWidth+Math.floor(Math.random()* 500);
		planet1.style.left=planetX+"px";
		planetY=Math.floor(Math.random()* window.innerHeight);
		planet1.style.top=planetY+"px";
        let number_for_planet=Math.floor(Math.random() * 50)+1;
        planet1.style.backgroundImage="url('../images/planets/"+number_for_planet+".png')";
	}}else{}
}
function randomAsteroid1() {
	let asteroid1left="-"+window.innerWidth*2;
	//	LEFT
	if (asteroid1X<=asteroid1left) {
		asteroid1X=window.innerWidth+Math.floor(Math.random()* 200);
		asteroid1.style.left=asteroid1X+"px";
		asteroid1Y=Math.floor(Math.random()* window.innerHeight);
		asteroid1.style.top=asteroid1Y+"px";
	}//  RIGHT
	else if(asteroid1X>=window.innerWidth*2){
		asteroid1X=-window.innerWidth+Math.floor(Math.random()* 200);
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
	}exitnumber=0;item6.className="sidemenuItem";
}
function exit() {  //	THIS FUNCTION GIVES YOU A WARNING ON FIRST CLICK
	if (exitnumber==0){item6.className="sidemenuexitbutton"; exitnumber=1;}
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
//	 GEAR AND SPEED
let gearNumber=2;
    function changeGear() {
    	if (gearNumber==1){
    	gearhandle.style.top="14%"; gearNumber++;speed=10;}
    	else if (gearNumber==2){
    	gearhandle.style.top="36%"; gearNumber++;speed=20;}
    	else if (gearNumber==3){
    	gearhandle.style.top="60%"; gearNumber++;speed=30;}
    	else if (gearNumber==4){
    	gearhandle.style.top="82%"; gearNumber=1;speed=40;}
    	gearhandle.style.transitionDuration="0.5s";
    }
//	INVENTORY
function showInventory() {
	inventory1.style.display="block";
	darkscreeninventory.style.display="block";
	inventory1.style.fontSize=inventory1.offsetWidth/12+"px";
	infoslot.style.fontSize=inventory1.offsetWidth/35+"px";
		if (inventory.Tools>0){
			itemTools.style.display="block";
			quantityTools.style.display="block";
			itemTools.style.left=s1.offsetLeft+"px";
			itemTools.style.top=s1.offsetTop+"px";
			quantityTools.style.fontSize=s1.offsetHeight/6+"px";
			quantityTools.innerHTML=inventory.Tools;
		}else{quantityTools.style.display="none";itemTools.style.display="none";}
		if (inventory.Fuel>0){
			itemFuel.style.display="block";
			quantityFuel.style.display="block";
			itemFuel.style.left=s2.offsetLeft+"px";
			itemFuel.style.top=s2.offsetTop+"px";
			quantityFuel.style.fontSize=s1.offsetHeight/6+"px";
			quantityFuel.innerHTML=inventory.Fuel;
		}else{itemFuel.style.display="none";quantityFuel.style.display="none";}
	}
function closeInventory() {
	inventory1.style.display="none";
	darkscreeninventory.style.display="none";
	basicinventory();
	selectedItem="";
	}
function basicinventory(){
	bigslot.style.backgroundImage="url(../images/UI/gearhandledesign.png)";
	bigslot.style.backgroundRepeat="repeat";
	bigslot.style.backgroundSize="initial";
	infoslot.innerHTML="<br>Select Item to view details"
}
function itemClick(itemName) {
	 if(itemName=="itemTools"){
	 	bigslot.style.backgroundImage="url('../images/UI/toolsicon.png')"
	 	infoslot.innerHTML="Tools<br>Quantity: "+inventory.Tools+
		"<br>Used to repair the spaceship.";
	 }
else if(itemName=="itemFuel"){
		bigslot.style.backgroundImage="url('../images/UI/fuelicon.png')"
		infoslot.innerHTML="Fuel Tank<br>Quantity: "+inventory.Fuel+
		"<br>Used to refill the spaceship.";
	 }
		bigslot.style.backgroundRepeat="no-repeat";
		bigslot.style.backgroundSize="cover";
		selectedItem=itemName;
}
function useitem(){

		//	 	TOOLS TOOLS TOOLS TOOLS TOOLS TOOLS 
if(selectedItem=="itemTools"&&myhealth<window.innerWidth/7.5){

if(inventory.Tools==1){
	showInventory();
	basicinventory();
	selectedItem="";
if (myhealth>window.innerWidth/7.5-$tools){
	myhealth=window.innerWidth/7.5;
	inventory.Tools=0;
	showInventory();ableToMove=true;
}
else {myhealth+=$tools;inventory.Tools=0;showInventory();ableToMove=true;}
health.style.width=myhealth+"px";itemClick("itemTools");}

else if(inventory.Tools>1&&myhealth<window.innerWidth/7.5){
	showInventory();
	itemClick(selectedItem);
if (myhealth>window.innerWidth/7.5-$tools&&myhealth<window.innerWidth/7.5){
	myhealth=window.innerWidth/7.5;
	inventory.Tools-=1;ableToMove=true;
	showInventory();
}
else {myhealth+=$tools;inventory.Tools-=1;showInventory();ableToMove=true;}
	health.style.width=myhealth+"px";itemClick("itemTools");}
}health.style.width=myhealth+"px";
		//	 	FUEL FUEL FUEL FUEL FUEL FUEL
if(selectedItem=="itemFuel"&&myfuel<window.innerWidth/11.928){

if(inventory.Fuel==1){
	showInventory();
	basicinventory();
	selectedItem="";
if (myfuel>window.innerWidth/11.928-$fuel){
	myfuel=window.innerWidth/11.928;
	inventory.Fuel=0;ableToMove=true;
	showInventory();
}
else {myfuel+=$fuel;inventory.Fuel=0;showInventory();ableToMove=true;}
fuel.style.width=myfuel+"px";itemClick("itemFuel");}

else if(inventory.Fuel>1&&myfuel<window.innerWidth/11.928){
	showInventory();
	itemClick(selectedItem);ableToMove=true;
if (myfuel>window.innerWidth/11.928-$fuel&&myfuel<window.innerWidth/11.928){
	myfuel=window.innerWidth/11.928;
	inventory.Fuel-=1;
	showInventory();
}
else {myfuel+=$fuel;inventory.Fuel-=1;showInventory();ableToMove=true;}
	fuel.style.width=myfuel+"px";itemClick("itemFuel");}
}
	//  	THE ENT OF THE FUNCTION
}
function useitembuttonpress(){
	if(selectedItem!=""){inventory1.style.borderTop="8px solid #4DDFE0";
	inventory1.style.backgroundImage="url('../images/UI/design7.png')";
}}
function useitembuttonrelease(){inventory1.style.borderTop="8px solid #6D6E6A";
	inventory1.style.backgroundImage="url('../images/UI/design1.png')";
}
let movingscreen=document.querySelector("#movingscreen");
	//document.onkeydown = moveanime;
	function moveanime(k) {
		if (k.keyCode==68){movingscreen.style.display="block";}
	}
/*	THINGS THAT SHOULD BE DONE ONLY WHEN WEBSITE IS LOADED	*/
	// RANDOM PLANET STYLE
    let number_for_planet=Math.floor(Math.random() * 50)+1;
    planet1.style.backgroundImage="url('../images/planets/"+number_for_planet+".png')";
    // FULL HEALTH-BAR SIZE
   	let healthbar = document.querySelector("#healthbar");
	let health = document.querySelector("#health");
	healthbar.style.width = window.innerWidth/7+"px";
	health.style.width = window.innerWidth/7.5+"px";
	let myhealth=window.innerWidth/7.5;
	// FULL FUEL-BAR SIZE
	let fuelbar = document.querySelector("#fuelbar");
	let fuel = document.querySelector("#fuel");
	fuelbar.style.width = window.innerWidth/10.928+"px";
	fuel.style.width = window.innerWidth/11.928+"px";
	var myfuel=fuel.offsetWidth;
	// MENU STUFF
	menu.style.right=0-menu.offsetWidth+"px";
	let item1 = document.querySelector(".item1");
	let item2 = document.querySelector(".item2");
	let item3 = document.querySelector(".item3");
	let item4 = document.querySelector(".item4");
	let item5 = document.querySelector(".item5");
	let item6 = document.querySelector(".item6");
	let exitnumber=0;
	// GEAR STUFF
	let gear = document.querySelector("#gear");
	gear.style.height=window.innerHeight/3.57+"px";
	gearhandle.style.height=gear.offsetHeight/6.25+"px";
	unitsbar.innerHTML="$ "+inventory.Units;
	// INVENTORY STUFF
	let inventory1 = document.querySelector("#inventory");
	let darkscreeninventory=document.querySelector("#darkscreeninventory");
	let s1=document.querySelector(".s1");let s3=document.querySelector(".s3");
	let s2=document.querySelector(".s2");let s4=document.querySelector(".s4");
	let s5=document.querySelector(".s5");let s8=document.querySelector(".s8");
	let s6=document.querySelector(".s6");let s7=document.querySelector(".s7");
	let s9=document.querySelector(".s9");
	let itemTools=document.querySelector(".itemTools");
	let quantityTools=document.querySelector(".quantityTools");
	let itemFuel=document.querySelector(".itemFuel");
	let quantityFuel=document.querySelector(".quantityFuel");
	let quantity=document.querySelector(".quantity");
	let bigslot=document.querySelector("#bigslot");
	let infoslot=document.querySelector("#infoslot");
	let selectedItem="";
	// ITEMS AND VALUES
	let $fuel=Math.floor(myfuel/2);
	let $tools=Math.floor(myhealth/5);
	
/*		 CALLING THE FUNCTIONS		*/	
showMenu();
planetSize();
spaceshipSize();
asteroidSize();
menubuttonSize();
sidemenuSize();
menuitems();
gearSize();
unitsbarSize();
scanpanelSize();
buttonSize();