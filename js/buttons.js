let screenStyle;

function Trash(id) {
    document.getElementById(id).remove();
}

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


function hide(element) {
    let div = element.getElementsByClassName('boutons')[0];
    let button = div.getElementsByClassName('buttonHide')[0];
    // console.log(typeof button.getAttribute('toHide'));
    if (button.getAttribute('toHide') === "true") {
        for (var i = 0; i < div.getElementsByClassName("buttonApp").length; i++) {
            div.getElementsByClassName("buttonApp")[i].style.visibility = "visible";
        }
        button.setAttribute('toHide', 'false');
    } else {
        for (var i = 0; i < div.getElementsByClassName("buttonApp").length; i++) {
            div.getElementsByClassName("buttonApp")[i].style.visibility = "hidden";
        }
        button.setAttribute('toHide', 'true');
    }
}
