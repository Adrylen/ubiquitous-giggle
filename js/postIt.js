// Variables :
var number = 0;
var color = "#000000";
var painting = false;
var started = false;
var size_min = 5;
var width_brush = 5;
var cursorX, cursorY;
var restoreCanvasArray = [];
var restoreCanvasIndex = 0;
var context;
var nbCanvas = 0;

function createNew() {
    number = number + 1;

    var sizeW = document.getElementById('postItGenerate').offsetWidth;
    var sizeH = document.getElementById('postItGenerate').offsetHeight;
    console.log(sizeH)

    //div principale
    let postIt = document.createElement('div');
    postIt.setAttribute('id', 'postIt' + number);
    //postIt.setAttribute('draggable', true);
    postIt.setAttribute('ondragstart', 'drag(event)');
    postIt.classList.add('postIt');
    postIt.style.width = sizeW + 'px';
    postIt.style.height = sizeH + 'px';
    console.log(postIt.style.height);

    //div des boutons
    let navigation = document.createElement('div');
    navigation.classList.add('boutons');
    navigation.style.width = 100 + '%';
    navigation.style.height = 30 + 'px';
    navigation.backgroundColor = '#F0E000';
    postIt.appendChild(navigation);
    console.log(navigation.style.height);

    //bouton Hide -> Cacher tous les autres
    let hide = document.createElement('input');
    hide.type = "button";
    hide.value = "Hide";
    hide.setAttribute('class', 'buttonHide');
    hide.setAttribute('onclick', 'hide()');
    navigation.appendChild(hide);

    //bouton poubelle
    let trash = document.createElement('img');
    trash.setAttribute('id', 'trash1');
    trash.classList.add('buttonApp');
    trash.setAttribute('onclick', 'Trash("postIt' + number + '")');
    trash.setAttribute('src', 'image/buttons/trashH.png');
    navigation.appendChild(trash);


    trash.style.visibility = "hidden";

    //bouton resize
    let resize = document.createElement('img');
    resize.setAttribute('class', 'buttonApp');
    resize.setAttribute('onclick', 'Resize()');
    resize.setAttribute('src', 'image/buttons/resizeH.png');
    navigation.appendChild(resize);


    resize.style.visibility = "hidden";

    //bouton full screen
    let fullscreen = document.createElement('img');
    fullscreen.setAttribute('class', 'buttonApp');
    fullscreen.setAttribute('onclick', 'fullscreen(' + postIt.id + ')');
    fullscreen.setAttribute('src', 'image/buttons/fullScreenH.png');
    navigation.appendChild(fullscreen);


    fullscreen.style.visibility = "hidden";

    //bouton turn
    let turn = document.createElement('img');
    turn.setAttribute('class', 'buttonApp');
    //turn.setAttribute('onclick','Turn()');
    turn.addEventListener('click', startRotation);
    turn.setAttribute('src', 'image/buttons/turnH.png');
    navigation.appendChild(turn);

    turn.style.visibility = "hidden";

    //bouton save
    let save = document.createElement('img');
    save.setAttribute('class', 'buttonApp');
    // save.setAttribute('onclick', 'Save()');
    save.setAttribute('src', 'image/buttons/saveH.png');
	save.addEventListener('click', download);
    navigation.appendChild(save);


    save.style.visibility = "hidden";

    //bouton full change
    let change = document.createElement('img');
    change.setAttribute('class', 'buttonApp');
    change.setAttribute('onclick', 'replace("postIt"+number+"")');
    change.setAttribute('src', 'image/buttons/styloH.png');
    navigation.appendChild(change);


    change.style.visibility = "hidden";

    //bouton move
    let move = document.createElement('img');
    move.setAttribute('class', 'buttonApp');
    move.setAttribute('onclick', 'Move("postIt' + number + '")');
    move.setAttribute('src', 'image/buttons/moveH.png');
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
    yellow.setAttribute('onclick', 'changeColor("yellow")');
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

function replace(id) {
    var parent = document.getElementById(id);
    var color = parent.getElementsByClassName('color')[0];
    var text = parent.getElementsByTagName("textarea")[0];
    var canvas = parent.getElementsByTagName("canvas")[0];

    if (text === undefined) {
        color.style.visibility = "hidden";
        canvas.remove();
        //  bouton.hide();
        text = document.createElement("textarea");
        text.setAttribute('type', 'text');
        parent.appendChild(text);
    } else {
        color.style.visibility = 'visible';
        text.remove();
        canvas = document.createElement("canvas");
        var div = document.createElement("div");
        canvas.appendChild(div);
        canvas.setAttribute("id", "postIt'+number+'");
        canvas.setAttribute("onclick", "createCanvas()");
        parent.appendChild(canvas);
    }
}

function Trash(id) {
    document.getElementById(id).remove();
}