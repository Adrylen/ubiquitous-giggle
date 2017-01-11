var initIntoPostitWidth;
var initIntoPostitHeight;
var inAutoDisplay = 0;


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(event) {
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("text", str);

}

function drop(event) {
    inAutoDisplay = 1;
    event.preventDefault();
    var offset = event.dataTransfer.getData("text").split(',');
    var dm = document.getElementById(offset[2]);
    console.log("OK", initIntoPostitWidth);
    console.log(dm.offsetWidth);
    if (dm.className != "intoAuto") {
        initIntoPostitWidth = dm.offsetWidth;
        initIntoPostitHeight = dm.offsetHeight;
        event.target.appendChild(document.getElementById(offset[2]));
        dm.style.height = "100%";
        dm.style.width = "100%";
        dm.className = "intoAuto";
        dm.style.left = 0;
        dm.style.top = 0;
    }
}

function drop_outside(event) {
    if (inAutoDisplay == 0) {
        var offset = event.dataTransfer.getData("text").split(',');
        var dm = document.getElementById(offset[2]);
        console.log("OK", initIntoPostitWidth);
        if (dm.className === "intoAuto") {
            console.log("IN", initIntoPostitWidth);
            // DEMANDER A ADRIEN POUR LE -5
            dm.style.height = initIntoPostitHeight-6 + "px";
            dm.style.width = initIntoPostitWidth-6 + "px";
            dm.style.left = (event.clientX) + 'px';
            dm.style.top = (event.clientY) + 'px';
        } else {
            dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
            dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
        }

        if (dm.className != "notAuto" || dm.className === "") {
            dm.className = "notAuto";
            event.target.appendChild(document.getElementById(offset[2]));
        }
        event.preventDefault();
        console.log(dm.offsetWidth);
        return false;
    } else {
        inAutoDisplay = 0;
    }
}
