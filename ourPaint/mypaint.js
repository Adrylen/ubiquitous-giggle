// Variables :
var color = "#000000";
var painting = false;
var started = false;
var width_brush = 5;
var cursorX, cursorY;
var restoreCanvasArray = [];
var restoreCanvasIndex = 0;
var context;
var nbCanvas = 0;

function createCanvas() {
    // Création du canvas
    var mycanva = document.createElement("canvas");

    //Incrément du nombre
    mycanva.id = "postitCanva" + nbCanvas;
    nbCanvas++;


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
        cursorX = (e.pageX - this.offsetLeft);
        cursorY = (e.pageY - this.offsetTop);
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
            cursorX = (e.pageX - this.offsetLeft) - 10; // 10 = décalage du curseur
            cursorY = (e.pageY - this.offsetTop) - 10;

            // Dessine une ligne :
            drawLine();
        }
    }, false);
    document.getElementById("largeurs_pinceau").appendChild(mycanva);
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
  color = "white"
  width_brush = 10;
}
