// Variables :
var number = 0;
var color = "#000000";
var painting = false;
var started = false;
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
    postIt.setAttribute('id','postIt'+number);
    postIt.setAttribute('draggable',true);
    postIt.setAttribute('ondragstart','drag(event)');
    postIt.classList.add('postIt');
    postIt.style.width = sizeW+'px';
    postIt.style.height = sizeH+'px';
    console.log(postIt.style.height);

    //div des boutons
    let navigation = document.createElement('div');
    navigation.classList.add('boutons');
    navigation.style.width=100+'%';
    navigation.style.height=30+'px';
    navigation.backgroundColor = '#F0E000';
    postIt.appendChild(navigation);
    console.log(navigation.style.height);

    //bouton poubelle
    let trash = document.createElement('button');
    trash.setAttribute('id','trash1');
    trash.classList.add('buttonApp');
    trash.setAttribute('onclick','Trash("postIt'+number+'")');
    navigation.appendChild(trash);

    //son icone
    let iTrash = document.createElement('img');
    iTrash.setAttribute('src','image/buttons/trash.png');
    trash.appendChild(iTrash);

    //bouton resize
    let resize = document.createElement('button');
    resize.setAttribute('class','buttonApp');
    resize.setAttribute('onclick','Resize()');
    navigation.appendChild(resize);

    //son icone
    let iResize = document.createElement('img');
    iResize.setAttribute('src','image/buttons/resize.png');
    resize.appendChild(iResize);

    //bouton full screen
    let fullscreen = document.createElement('button');
    fullscreen.setAttribute('class','buttonApp');
    fullscreen.setAttribute('onclick','FullScreen()');
    navigation.appendChild(fullscreen);

    //son icone
    let iFullscreen = document.createElement('img');
    iFullscreen.setAttribute('src','image/buttons/fullScreen.png');
    fullscreen.appendChild(iFullscreen);

    //bouton turn
    let turn = document.createElement('button');
    turn.setAttribute('class','buttonApp');
    //turn.setAttribute('onclick','Turn()');
    turn.addEventListener('click', startRotation);
    navigation.appendChild(turn);

    //son icone
    let iTurn = document.createElement('img');
    iTurn.setAttribute('src','image/buttons/turn.png');
    turn.appendChild(iTurn);

    //bouton save
    let save = document.createElement('button');
    save.setAttribute('class','buttonApp');
    save.setAttribute('onclick','Save()');
    navigation.appendChild(save);

    //son icone
    let iSave = document.createElement('img');
    iSave.setAttribute('src','image/buttons/save.png');
    save.appendChild(iSave);

    //bouton full change
    let change = document.createElement('button');
    change.setAttribute('class','buttonApp');
    change.setAttribute('onclick','replace("postIt"+number+"")');
    navigation.appendChild(change);

    //son icone
    let ichange = document.createElement('img');
    ichange.setAttribute('src','image/buttons/change.png');
    change.appendChild(ichange);

    //bouton move
    let move = document.createElement('button');
    move.setAttribute('class','buttonApp');
    move.setAttribute('onclick','Move()');
    navigation.appendChild(move);

    //son icone
    let iMove = document.createElement('img');
    iMove.setAttribute('src','image/buttons/move.png');
    move.appendChild(iMove);

    let text = document.createElement('textarea');
    text.setAttribute('type','text');
    postIt.appendChild(text);
    text.setAttribute('style.resize','none');
    text.style.width=70+'%';
    text.style.height=70+'%';
    text.style.bottom= 0 +'%';

    // bouton bleu
    let color = document.createElement('div');
    let blue = document.createElement('button');
    blue.setAttribute('id','blue');
    blue.setAttribute('onclick','changeColor("blue")');
    navigation.appendChild(blue);
    color.appendChild(blue);
    //bouton rouge
    let red = document.createElement('button');
    red.setAttribute('id','red');
    red.setAttribute('onclick','changeColor("red")');
    navigation.appendChild(red);
    color.appendChild(red);

    //bouton noir
      let black = document.createElement('button');
    black.setAttribute('id','black');
    black.setAttribute('onclick','changeColor("black")');
    navigation.appendChild(black);
    color.appendChild(black);

    //bouton yellow
    let yellow = document.createElement('button');
    yellow.setAttribute('id','yellow');
    yellow.setAttribute('onclick','changeColor("yellow")');
    navigation.appendChild(yellow);
    color.appendChild(yellow);

    //bouton purple
    let purple = document.createElement('button');
    purple.setAttribute('id','purple');
    purple.setAttribute('onclick','changeColor("purple")');
    navigation.appendChild(purple);
    color.appendChild(purple);

    //bouton rose
    let pink = document.createElement('button');
    pink.setAttribute('id','pink');
    pink.setAttribute('onclick','changeColor("pink")');
    navigation.appendChild(pink);
    color.appendChild(pink);

    //bouton marron
    let brown = document.createElement('button');
    brown.setAttribute('id','brown');
    brown.setAttribute('onclick','changeColor("brown")');
    navigation.appendChild(brown);
    color.appendChild(brown);

    // bouton green
    let green = document.createElement('button');
    green.setAttribute('id','green');
    green.setAttribute('onclick','changeColor("green")');
    navigation.appendChild(green);
    color.appendChild(green);

    // bouton blanc
    let white = document.createElement('button');
    white.setAttribute('id','white');
    white.setAttribute('onclick','changeColor("white")');
    navigation.appendChild(white);
    color.appendChild(white);


    document.getElementById('page').appendChild(postIt);
}

function replace(id){
  var parent = document.getElementById(id);
  var bouton = document.
  var text = document.getElementById(id).getElementsByTagName("textarea")[0];
  var canvas = document.getElementById(id).getElementsByTagName("canvas")[0];

  if(text === undefined) {
    canvas.remove();
  //  bouton.hide();
    text = document.createElement("textarea");
    text.setAttribute('type','text');
    parent.appendChild(text);
  }
  else {
    text.remove();
    canvas = document.createElement("canvas");
    var div = document.createElement("div");
    canvas.appendChild(div);
    canvas.setAttribute("id","postIt'+number+'");
    canvas.setAttribute("onclick","createCanvas()");
    parent.appendChild(canvas);
  }
}

function Trash(id) {
    document.getElementById(id).remove();
}
