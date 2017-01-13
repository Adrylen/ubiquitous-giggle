let screenStyle;
/*fonction pour le bouton poubelle du post-it*/
function Trash(id) {
    document.getElementById(id).remove();
}

/*fonction pour le bouton plein écran du post-it*/
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

/*fonction du bouton tourner de l'ecran principal, permet de touner de 180° la page entière*/
function FullTurn() {
    if(document.getElementById('page').style.transform === "rotate(180deg)")
        document.getElementById('page').style.transform = "rotate(0deg)";
    else
        document.getElementById('page').style.transform = "rotate(180deg)";
}

/*fonction du bouton de déplacement du post-it, permet de rendre possible ou non le déplacement du post-it*/
function Move(name) {
    var currentPostit = document.getElementById(name);
    if (!currentPostit.draggable) {
        currentPostit.setAttribute('draggable', true);
    } else {
        currentPostit.setAttribute('draggable', false);
    }

}

/*fonction du bouton hide du post-it, permet de masquer ou non les différents boutons utitlisés dans le post-it*/
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
