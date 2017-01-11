var number = 0;

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
    trash.setAttribute('onclick','Trash()');
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
    turn.setAttribute('onclick','Turn()');
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

    //bouton full close
    let close = document.createElement('button');
    close.setAttribute('class','buttonApp');
    close.setAttribute('onclick','Close()');
    navigation.appendChild(close);

    //son icone
    let iClose = document.createElement('img');
    iClose.setAttribute('src','image/buttons/close.png');
    close.appendChild(iClose);

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
    text.style.width=99+'%';
    text.style.height=99+'%';
    text.style.bottom= 0 +'%';

    document.getElementById('page').appendChild(postIt);
}

function replace(id){
  var parent = document.getElementById(id);
  var text = document.getElementById(id).getElementsByTagName("textarea")[0];;
  var canvas = document.getElementById(id).getElementsByTagName("canvas")[0]; ;

  if(text === undefined) {
    canvas.remove();
    text = document.createElement("textarea");
    text.setAttribute('type','text');
    parent.appendChild(text);
  }
  else {
    text.remove();
    canvas = document.createElement("canvas");
    parent.appendChild(canvas);
  }
}

function remove(id){
  document.getElementById(id).remove();
}
