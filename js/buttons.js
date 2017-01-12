var areHidden = true;

function Trash() {
    alert("tu vas jeter un truc là");
}

function Resize() {
    alert("resize comme tu veux bro");
}

function FullScreen() {
    alert("ça va pop en gros devant tout le monde");
}

function FullTurn() {
    alert("tout va tourner de 90°");
}

function Save() {
    alert("tu vas enregistrer dans tes téléchargement")
}

function ScreenShot() {
    alert("tu vas prendre une photo de la table en entier");
}

function Move() {
    alert("tu vas pouvoir bouger ça vers tes collègue");
}

function Close() {
    alert("es-tu sûr de vouloir fermer ça?");
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
