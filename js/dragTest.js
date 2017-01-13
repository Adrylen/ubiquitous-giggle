var values = {
    // x
    // y
    // width
    // height
    // rotation
};

var inAutoDisplay = 0;
var autoDisplayOccupate = false;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    values.x = event.clientX;
    values.y = event.clientY;
    event.dataTransfer.setData("text", str);
}

function drop(event) {
    if (!autoDisplayOccupate) {
        inAutoDisplay = 1;
        event.preventDefault();
        var offset = event.dataTransfer.getData("text").split(',');
        var dm = document.getElementById(offset[2]);
        values.rotation = dm.style.transform;
        if (dm.classList[1] != "intoAuto") {
            values.width = dm.offsetWidth;
            values.height = dm.offsetHeight;
            event.target.appendChild(document.getElementById(offset[2]));
            dm.style.height = "100%";
            dm.style.width = "100%";
            //console.log(dm.style.width);
            dm.classList[1] = "intoAuto";
            dm.style.left = 0;
            dm.style.top = 0;
            dm.style.transform = "";
        }
        autoDisplayOccupate = true;
    } else {
        event.preventDefault();
        var offset = event.dataTransfer.getData("text").split(',');
        var dm = document.getElementById(offset[2]);
        dm.style.left = values.x + 'px';
        dm.style.top = values.y + 'px';
    }

}

function drop_outside(event) {
    if (inAutoDisplay == 0) {
        var offset = event.dataTransfer.getData("text").split(',');
        var dm = document.getElementById(offset[2]);
        if (dm.classList[1] === "intoAuto") {
            dm.style.height = values.height - 6 + "px";
            dm.style.width = values.width - 6 + "px";
            dm.style.transform = values.rotation;
            dm.style.left = (event.clientX) + 'px';
            dm.style.top = (event.clientY) + 'px';
            autoDisplayOccupate = false;
        } else {
            dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
            dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
        }

        if (dm.classList[1] != "notAuto" || dm.classList[1] === "") {
            dm.classList[1] = "notAuto";
            event.target.appendChild(document.getElementById(offset[2]));
        }
        event.preventDefault();
        return false;
    } else {
        inAutoDisplay = 0;
    }
}
