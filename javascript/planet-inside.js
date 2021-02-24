/*
The following functions randomly chooses land and atmosphere to the planet.
Land types = 10, Atmosphere types = 8.
*/
function landClass() {
	let core=document.querySelector("#land");
	var landnumber = Math.floor(Math.random()*10+1);
	core.className="land"+landnumber+" "+"land0";
}
function landsize() {
	let core=document.querySelector("#land");
	core.style.width=window.innerWidth-window.innerWidth/4+"px";
	core.style.height=window.innerWidth-window.innerWidth/4+"px";
}

function atmosphereClass (){
	let core=document.querySelector("#land");
	let sky=document.querySelector("#atmosphere");
	var atmospherenumber = Math.floor(Math.random()*8+1);
	sky.className="atmosphere"+atmospherenumber+" "+"atmosphere0";
}
function atmospheresize() {
	let sky=document.querySelector("#atmosphere");
	sky.style.width=window.innerWidth+window.innerWidth/5+"px";
	sky.style.height=window.innerWidth+window.innerWidth/5+"px";
}

/* 
 calling the two functions... this will couse a random planet everytime the
 page is loaded.... we will modify it later, cuz we dont want someone to 
 collect all the items and then reload the page to get more.
*/

/*	 AlIGNING	*/
function alignLand() {
	var land=document.querySelector("#land");
	land.style.left=window.innerWidth/2-land.offsetWidth/2+"px";
	land.style.top=window.innerHeight/2+"px";
}
function alignAtmosphere() {
	var atmosphere=document.querySelector("#atmosphere");
	atmosphere.style.left=window.innerWidth/2-atmosphere.offsetWidth/2+"px";
	atmosphere.style.top=window.innerHeight-atmosphere.offsetWidth/2.55+"px";
}

/*	 MOVEMENTS	*/
let atmosphere1=document.querySelector("#atmosphere");
let land1=document.querySelector("#land");
let moveright=-1;
let moveleft=1;
function move(e) {
	// D
	if (e.keyCode==68){
		land1.style.transform="rotate("+moveright+"deg)";
		atmosphere1.style.transform="rotate("+moveright+"deg)";
		moveright-=1;
	}
	// A
	if (e.keyCode==65){
		land1.style.transform="rotate("+moveleft+"deg)";
		atmosphere1.style.transform="rotate("+moveright+"deg)";
		moveleft+=1;
	}
}
document.onkeydown=move;
/*	 CALLING THE FUNCTIONS	*/
landClass();
landsize();
atmosphereClass();
atmospheresize();
alignAtmosphere();
alignLand();

/*	END OF THE SCRIPT	*/
