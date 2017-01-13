// Variables :
var number = 0;
var color = "#000000";
var painting = false;
var started = false;
var size_min = 5;


function createNew() {
    number = number + 1;

    let generate = document.getElementById('postItGenerate');
    var sizeW = generate.offsetWidth;
    var sizeH = generate.offsetHeight;

    //div principale
    let postIt = document.createElement('div');
    postIt.setAttribute('id', 'postIt' + number);
    postIt.setAttribute('draggable', true);
    postIt.setAttribute('ondragstart', 'drag(event)');
    postIt.classList.add('postIt');
    postIt.classList.add('notAuto');
    postIt.style.width = sizeW + 'px';
    postIt.style.height = sizeH + 'px';
    postIt.addEventListener('resize', (e) => {console.log("GO");});

    //div des boutons
    let navigation = document.createElement('div');
    navigation.classList.add('boutons');
    navigation.style.width = 100 + '%';
    navigation.style.height = 30 + 'px';
    navigation.backgroundColor = '#F0E000';
    postIt.appendChild(navigation);

    //bouton Hide -> Cacher tous les autres
    let hide = document.createElement('img');
    hide.type = "button";
    hide.value = "Hide";
    hide.addEventListener("mousedown", mouseDown);
    hide.addEventListener("mouseup", mouseUp);
    hide.setAttribute('class', 'buttonHide');
    hide.setAttribute('toHide', true);
    hide.setAttribute('onclick', 'hide(' + postIt.id + ')');
    hide.setAttribute('src', 'image/buttons/hideH.png');

    navigation.appendChild(hide);

    //bouton poubelle
    let trash = document.createElement('img');
    trash.type = "button";
    trash.addEventListener("mousedown", mouseDown);
    trash.addEventListener("mouseup", mouseUp);
    trash.setAttribute('class', 'buttonApp');
    trash.setAttribute('onclick', 'Trash("postIt' + number + '")');
    trash.setAttribute('src', 'image/buttons/trashH.png');
    navigation.appendChild(trash);


    trash.style.visibility = "hidden";


    //bouton full screen
    let fullscreen = document.createElement('img');
    fullscreen.addEventListener("mousedown", mouseDown);
    fullscreen.addEventListener("mouseup", mouseUp);
    fullscreen.type = "button";
    fullscreen.setAttribute('class', 'buttonApp');
    fullscreen.setAttribute('onclick', 'fullscreen(' + postIt.id + ')');
    fullscreen.setAttribute('src', 'image/buttons/fullScreenH.png');
    navigation.appendChild(fullscreen);


    fullscreen.style.visibility = "hidden";

    //bouton turn
    let turn = document.createElement('img');
    turn.addEventListener("mousedown", mouseDownS);
    turn.addEventListener("mouseup", mouseUpS);
    turn.type = "button";
    turn.setAttribute('class', 'buttonApp');
    //turn.setAttribute('onclick','Turn()');
    turn.addEventListener('click', startRotation);
    turn.setAttribute('src', 'image/buttons/turnH.png');
    navigation.appendChild(turn);

    turn.style.visibility = "hidden";

    //bouton save
    let save = document.createElement('img');
    save.addEventListener("mousedown", mouseDown);
    save.addEventListener("mouseup", mouseUp);
    save.type = "button";
    save.setAttribute('class', 'buttonApp');
    save.setAttribute('src', 'image/buttons/saveH.png');
    save.addEventListener('click', download);
    navigation.appendChild(save);


    save.style.visibility = "hidden";

    //bouton full change
    let change = document.createElement('img');
    change.addEventListener("mousedown", mouseDown);
    change.addEventListener("mouseup", mouseUp);
    change.type = "button";
    change.setAttribute('class', 'buttonApp');
    change.setAttribute('onclick', 'replace(' + postIt.id + ')');
    change.setAttribute('src', 'image/buttons/styloH.png');
    navigation.appendChild(change);


    change.style.visibility = "hidden";

    //bouton move
    let move = document.createElement('img');
    move.addEventListener("mousedown", mouseDownS);
    move.addEventListener("mouseup", mouseUpS);
    move.type = "button";
    move.setAttribute('class', 'buttonApp');
    move.setAttribute('onclick', 'Move("postIt' + number + '")');
    move.setAttribute('src', 'image/buttons/moveOKH.png');
    navigation.appendChild(move);


    move.style.visibility = "hidden";

    let text = document.createElement('textarea');
    text.setAttribute('type', 'text');
    postIt.appendChild(text);
    VKI_attach(text);
    text.setAttribute('style.resize', 'none');
    text.style.width = 70 + '%';
    text.style.height = 70 + '%';
    text.style.bottom = 0 + '%';


    // bouton bleu
    let color = document.createElement('div');
    color.classList.add('color');
    let blue = document.createElement('button');
    blue.setAttribute('id', 'blue');
    blue.setAttribute('onclick', 'changeColor("blue")');
    navigation.appendChild(blue);
    color.appendChild(blue);

    //bouton rouge
    let red = document.createElement('button');
    red.setAttribute('id', 'red');
    red.setAttribute('onclick', 'changeColor("red")');
    navigation.appendChild(red);
    color.appendChild(red);

    //bouton noir
    let black = document.createElement('button');
    black.setAttribute('id', 'black');
    black.setAttribute('onclick', 'changeColor("black")');
    navigation.appendChild(black);
    color.appendChild(black);

    //bouton jaune
    let yellow = document.createElement('button');
    yellow.setAttribute('id', 'yellow');
    yellow.setAttribute('onclick', 'changeColor("#F8F587")');
    navigation.appendChild(yellow);
    color.appendChild(yellow);

    //bouton purple
    let purple = document.createElement('button');
    purple.setAttribute('id', 'purple');
    purple.setAttribute('onclick', 'changeColor("purple")');
    navigation.appendChild(purple);
    color.appendChild(purple);

    //bouton rose
    let pink = document.createElement('button');
    pink.setAttribute('id', 'pink');
    pink.setAttribute('onclick', 'changeColor("pink")');
    navigation.appendChild(pink);
    color.appendChild(pink);

    //bouton marron
    let brown = document.createElement('button');
    brown.setAttribute('id', 'brown');
    brown.setAttribute('onclick', 'changeColor("brown")');
    navigation.appendChild(brown);
    color.appendChild(brown);

    // bouton green
    let green = document.createElement('button');
    green.setAttribute('id', 'green');
    green.setAttribute('onclick', 'changeColor("green")');
    navigation.appendChild(green);
    color.appendChild(green);

    // bouton blanc
    let white = document.createElement('button');
    white.setAttribute('id', 'white');
    white.setAttribute('onclick', 'changeColor("white")');
    navigation.appendChild(white);
    color.appendChild(white);

    color.style.visibility = 'hidden';
    postIt.appendChild(color);

    document.getElementById('page').appendChild(postIt);
}

function replace(parent) {
    var color = parent.getElementsByClassName('color')[0];
    var text = parent.getElementsByTagName("textarea")[0];
    var canvas = parent.getElementsByTagName("canvas")[0];
    if (text === undefined) {
        color.style.visibility = "hidden";
        canvas.remove();
        text = document.createElement("textarea");
        text.setAttribute('type', 'text');
        parent.appendChild(text);
        VKI_attach(text);
    } else {
        color.style.visibility = 'visible';
        text.remove();
        if (parent.classList[1] == "notAuto") {
            parent.style.width = 302 + 'px';
            parent.style.height = 360 + 'px';
        }
        createCanvas(parent);
    }
}

//les fonctions suivantes permettent de faire les animations de click des boutons dans le post-it
function mouseDown(event) {
    this.src = 'image/buttons/' + event.target.getAttribute('src').match(/[a-zA-Z]+(?=[HB]\.png)/g) + 'B.png';
}

function mouseUp(event) {
    this.src = 'image/buttons/' + event.target.getAttribute('src').match(/[a-zA-Z]+(?=[HB]\.png)/g) + 'H.png';
}

function mouseDownS(event) {
    if (event.target.getAttribute('src').match(/OK/g) !== null)
        this.src = 'image/buttons/' + event.target.getAttribute('src').match(/[a-zA-Z]+(?=OK[HB]\.png)/g) + 'OKB.png';
    else
        this.src = 'image/buttons/' + event.target.getAttribute('src').match(/[a-zA-Z]+(?=[HB]\.png)/g) + 'B.png';
}

function mouseUpS(event) {
    if (event.target.getAttribute('src').match(/OK/g) !== null)
        this.src = 'image/buttons/' + event.target.getAttribute('src').match(/[a-zA-Z]+(?=OK[HB]\.png)/g) + 'H.png';
    else
        this.src = 'image/buttons/' + event.target.getAttribute('src').match(/[a-zA-Z]+(?=[HB]\.png)/g) + 'OKH.png';
}