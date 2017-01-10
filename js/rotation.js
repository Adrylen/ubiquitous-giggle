var rotated = false;

document.getElementById('button').onclick = function() {
    var div = document.getElementById('div'),
        deg = rotated ? 0 : 66;

    //div.style.webkitTransform = 'rotate('+deg+'deg)';
    //div.style.mozTransform    = 'rotate('+deg+'deg)';
    //div.style.msTransform     = 'rotate('+deg+'deg)';
    //div.style.oTransform      = 'rotate('+deg+'deg)';
    div.style.transform       = 'rotate('+deg+'deg)';

    rotated = !rotated;
}

let x0,y0;
let x1,y1;
let d01,d12,scalaire;
let angle=0,sign=1;
let rotate = false;

document.getElementById("rotation").addEventListener("click", e => {
    if(!rotate) {
        let block = document.getElementById("div");
        x0 = e.pageX; y0 = e.pageY;
        x1 = block.offsetLeft + block.offsetWidth / 2;
        y1 = block.offsetTop + block.offsetHeight / 2;
        d01 = Math.sqrt(Math.pow(x1-x0,2) + Math.pow(y1-y0,2));
    }
    else { angle = ((sign * Math.acos(scalaire / (d01 * d12))) % (2*Math.PI)) * 180 / Math.PI + angle; }
    rotate = !rotate;
});

document.addEventListener("mousemove", e => {
    if(rotate) {
        let x2,y2;
        x2 = e.pageX; y2 = e.pageY;
        d12 = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
        scalaire = (x0-x1)*(x2-x1) + (y0-y1)*(y2-y1);
        sign = (x0-x1)*(y2-y1) - (x2-x1)*(y0-y1);
        sign = (sign > 0) ? 1 : -1;
        let theta = ((sign * Math.acos(scalaire / (d01 * d12))) % (2*Math.PI)) * 180 / Math.PI + angle;
        document.getElementById("div").style.transform = "rotate("+theta+"deg)";
	}
});