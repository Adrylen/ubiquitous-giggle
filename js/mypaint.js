// Variables :
var color = "#000000";
var painting = false;
var started = false;
var width_brush = 1;
var cursorX, cursorY;
var restoreCanvasArray = [];
var restoreCanvasIndex = 0;
var context;
var nbCanvas = 0;
var height;
var width;

function createCanvas(parent,number) {
    // Création du canvas
    var mycanva = document.createElement("canvas");
    var div = document.createElement("div");
    mycanva.appendChild(div);
    parent.appendChild(mycanva);

    //Incrément du nombre
    mycanva.id = "canvapostIt"+number;
    mycanva.style.width = 300+'px';
    mycanva.style.height= 300+'px';
    width =  300;
    height = 300;
    var canva = $(mycanva);

    //Création du context
    context = canva[0].getContext('2d');

    // Trait arrondi :
    context.lineJoin = 'round';
    context.lineCap = 'round';

    mycanva.addEventListener("mousedown", function(e) {
        painting = true;
        var canva = $(mycanva);

        //Création du context
        context = canva[0].getContext('2d');
        // Coordonnées de la souris :
        cursorX = (e.pageX - this.offsetLeft -parent.offsetLeft);
        cursorY = (e.pageY - this.offsetTop - parent.offsetTop);
    }, false);

    window.addEventListener("mouseup", function(e) {
        var canva = $(mycanva);

        //Création du context
        context = canva[0].getContext('2d');
        painting = false;
        started = false;
    }, false);

    mycanva.addEventListener("mousemove", function(e) {
        // Si je suis en train de dessiner (click souris enfoncé) :
        var canva = $(mycanva);

        //Création du context
        context = canva[0].getContext('2d');
        if (painting) {
            // Set Coordonnées de la souris :
            // width_brush = (width_brush*100)/width;

            console.log(e.pageX - mycanva.offsetLeft, e.pageY - mycanva.offsetTop, parent.offsetTop);
            // cursorX = (e.pageX+parent.offsetTop)-10; // 10 = décalage du curseur
            // cursorY = (e.pageY+parent.offsetLeft)-10;
            cursorX = parent.offsetLeft- mycanva.offsetLeft + e.pageX; // 10 = décalage du curseur
            cursorY = parent.offsetTop - mycanva.offsetTop + e.pageY;
            // Dessine une ligne :
            drawLine();
        }
    }, false);
}

// Fonction qui dessine une ligne :
function drawLine() {
    // Si c'est le début, j'initialise
    if (!started) {
        // Je place mon curseur pour la première fois :
      context.beginPath();
      context.moveTo(cursorX, cursorY);
      started = true;
    }
    // Sinon je dessine
    else {
      if ( cursorX<300 ){
        if( cursorX>0){
          if(cursorY<300){
            if(cursorY>0){
              context.lineTo(cursorX, cursorY);
              context.strokeStyle = color;
              context.lineWidth = width_brush;
              context.stroke();
            }
            else{
              context.lineTo(cursorX, 0);
              context.strokeStyle = color;
              context.lineWidth = width_brush;
              context.stroke();
            }
          }
          else{
            context.lineTo(cursorX,300);
            context.strokeStyle = color;
            context.lineWidth = width_brush;
            context.stroke();
          }
        }
        else{
          context.lineTo(0,cursorY);
          context.strokeStyle = color;
          context.lineWidth = width_brush;
          context.stroke();
        }
    }
    else{
      context.moveTo(300,cursorY);
      context.strokeStyle = color;
      context.lineWidth = width_brush;
      context.stroke();
    }

    }
}

// Pour chaque carré de couleur :
$("#couleurs a").each(function() {
    // Je lui attribut une couleur de fond :
    $(this).css("background", $(this).attr("data-couleur"));

    // Et au click :
    $(this).click(function() {
        // Je change la couleur du pinceau :
        color = $(this).attr("data-couleur");

        // Et les classes CSS :
        $("#couleurs a").removeAttr("class", "");
        $(this).attr("class", "actif");

        return false;
    });
});

function changeColor(id) {
  color = id;
}
function clean(){
  color = "yellow"
  width_brush = 10;
}
