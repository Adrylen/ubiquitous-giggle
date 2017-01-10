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
    if (dm.className != "intoAuto") {
        initIntoPostitWidth = dm.style.width;
        initIntoPostitHeight = dm.style.height;
        dm.style.width = "450px";
        dm.style.height = "400px";
        dm.className = "intoAuto";
        xBlock = document.getElementById("div2").offsetLeft;
        yBlock = document.getElementById("div2").offsetTop;
        dm.style.left = xBlock + 'px';
        dm.style.top = yBlock + 'px';
        event.target.appendChild(document.getElementById(offset[2]));
    }
}

function drop_outside(event) {
    if (inAutoDisplay == 0) {
        var offset = event.dataTransfer.getData("text").split(',');
        var dm = document.getElementById(offset[2]);
        dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
        dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
        if (dm.className === "intoAuto") {
            dm.style.height = initIntoPostitHeight;
            dm.style.width = initIntoPostitWidth;
        }
        if (dm.className != "notAuto" || dm.className === "") {
            dm.className = "notAuto";
            event.target.appendChild(document.getElementById(offset[2]));
        }
        event.preventDefault();
        return false;

    } else {
        inAutoDisplay = 0;
    }
}
