var areHidden = true;

function Trash(id) {
    document.getElementById(id).remove();
}

let screenStyle;

function fullscreen(element) {
	if(Object.keys(element.classList).some(key => element.classList[key] == "full") === false) {
		element.classList.add("full");
		screenStyle = {
			top: element.style.top,
			left: element.style.left,
			width: element.style.width,
			height: element.style.height,
		};
		element.removeAttribute('style');
	}
	else {
		element.classList.remove("full");
		element.style.top = screenStyle.top;
		element.style.left = screenStyle.left;
		element.style.width = screenStyle.width;
		element.style.height = screenStyle.height;
	}
}  

function FullTurn() {
    if(document.getElementById('page').style.transform === "rotate(180deg)")
        document.getElementById('page').style.transform = "rotate(0deg)";
    else
        document.getElementById('page').style.transform = "rotate(180deg)";
}


function Move(name) {
    var currentPostit = document.getElementById(name);
    if (!currentPostit.draggable) {
        currentPostit.setAttribute('draggable', true);
    } else {
        currentPostit.setAttribute('draggable', false);
    }

}


function hide() {
    if (areHidden) {
        for (var i = 0; i < document.getElementsByClassName("buttonApp").length; i++) {
            document.getElementsByClassName("buttonApp")[i].style.visibility = "visible";
        }
        areHidden = false;
    } else {
        for (var i = 0; i < document.getElementsByClassName("buttonApp").length; i++) {
            document.getElementsByClassName("buttonApp")[i].style.visibility = "hidden";
        }
        areHidden = true;
    }
}
