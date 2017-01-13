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

function createCanvas(parent) {
    // Création du canvas
    var mycanva = document.createElement("canvas");
    var div = document.createElement("div");
    mycanva.appendChild(div);
    parent.appendChild(mycanva);

    //Incrément du nombre
    mycanva.id = document.getElementById(parent);
    console.log(mycanva);
    mycanva.width = 300;
    mycanva.height= 300;
    width =  300;
    height = 300;
    var canva = $(mycanva);

    //Création du context
    context = canva[0].getContext('2d');

    // Trait arrondi :
    context.lineJoin = 'round';
    context.lineCap = 'round';-

    mycanva.addEventListener("mousedown", function(e) {
        painting = true;
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
            cursorY = (-parent.offsetTop - mycanva.offsetTop + e.pageY);
            cursorX = -parent.offsetLeft - mycanva.offsetLeft + e.pageX;

            // Dessine une ligne :
            drawLine(cursorX, cursorY);
        }
    }, false);
}

// Fonction qui dessine une ligne :
function drawLine(cursorX, cursorY) {
    // Si c'est le début, j'initialise
    if (!started) {
        // Je place mon curseur pour la première fois :
      context.beginPath();
      context.moveTo(cursorX, cursorY);
      started = true;
    }
    // Sinon je dessine
    else {
      console.log(`${cursorX}, ${cursorY}`);
      context.lineTo(cursorX, cursorY);
      context.strokeStyle = color;
      context.lineWidth = width_brush;
      context.stroke();
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
