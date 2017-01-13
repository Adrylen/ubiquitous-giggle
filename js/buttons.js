function Trash() {
    alert("tu vas jeter un truc là");
}

function Resize() {
    alert("resize comme tu veux bro");
}

function FullScreen() {
    alert("ça va pop en gros devant tout le monde");
}

function FullTurn(id) {
    if(document.getElementById('page').style.transform === "rotate(180deg)")
        document.getElementById('page').style.transform = "rotate(0deg)";
    else
        document.getElementById('page').style.transform = "rotate(180deg)";
}

function ScreenShot() {
    alert("tu vas prendre une photo de la table en entier");
}

function Move(name) {
    var currentPostit = document.getElementById(name);
    if (!currentPostit.draggable) {
        currentPostit.setAttribute('draggable', true);
    } else {
        currentPostit.setAttribute('draggable', false);
    }

}

function Close() {
    alert("es-tu sûr de vouloir fermer ça?");
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
    // if (areHidden) {
    //     for (var i = 0; i < document.getElementsByClassName("buttonApp").length; i++) {
    //         document.getElementsByClassName("buttonApp")[i].style.visibility = "visible";
    //     }
    //     areHidden = false;
    // } else {
    //     for (var i = 0; i < document.getElementsByClassName("buttonApp").length; i++) {
    //         document.getElementsByClassName("buttonApp")[i].style.visibility = "hidden";
    //     }
    //     areHidden = true;
    // }
}
