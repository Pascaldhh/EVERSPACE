/*
The following functions randomly chooses land and atmosphere to the planet.
Land types = 10, Atmosphere types = 8.
*/
function landclass(){
	var core = document.querySelector("#land");
	var landnumber = Math.floor(Math.random()*10+1);
	if(landnumber==1){ core.classList.add("land1"); }
	else if(landnumber==2){ core.classList.add("land2"); }
	else if(landnumber==3){ core.classList.add("land3"); }
	else if(landnumber==4){ core.classList.add("land4"); }
	else if(landnumber==5){ core.classList.add("land5"); }
	else if(landnumber==6){ core.classList.add("land6"); }
	else if(landnumber==7){ core.classList.add("land7"); }
	else if(landnumber==8){ core.classList.add("land8"); }
	else if(landnumber==9){ core.classList.add("land9"); }
	else if(landnumber==10){ core.classList.add("land10"); }
	core.style.width=window.innerWidth-window.innerWidth/4+"px";
	core.style.height=window.innerWidth-window.innerWidth/4+"px";
}
function atmosphereclass(){
	var sky = document.querySelector("#atmosphere");
	var atmospherenumber = Math.floor(Math.random()*8+1);
	if(atmospherenumber==1){ sky.classList.add("atmosphere1"); }
	else if(atmospherenumber==2){ sky.classList.add("atmosphere2"); }
	else if(atmospherenumber==3){ sky.classList.add("atmosphere3"); }
	else if(atmospherenumber==4){ sky.classList.add("atmosphere4"); }
	else if(atmospherenumber==5){ sky.classList.add("atmosphere5"); }
	else if(atmospherenumber==6){ sky.classList.add("atmosphere6"); }
	else if(atmospherenumber==7){ sky.classList.add("atmosphere7"); }
	else if(atmospherenumber==8){ sky.classList.add("atmosphere8"); }
	sky.style.width=window.innerWidth+window.innerWidth/5+"px";
	sky.style.height=window.innerWidth+window.innerWidth/5+"px";
}

/* 
 calling the two functions... this will couse a random planet everytime the
 page is loaded.... we will modify it later, cuz we dont want someone to 
 collect all the items and then reload the page to get more.
*/
landclass();
atmosphereclass();


/*	END OF THE SCRIPT	*/