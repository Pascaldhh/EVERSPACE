function headingsize(){
	var heading = document.querySelector("#head");
heading.style.fontSize = window.innerWidth/22+"px";
}

function mainsize(){
	var block = document.querySelector("#main");
	block.style.width=window.innerWidth/2+"px";
	block.style.height=window.innerHeight*0.5+"px";
}
function heading() {
    var title = document.querySelector("#head");
    title.style.fontSize=window.innerWidth/23+"px";
}
mainsize();
heading();