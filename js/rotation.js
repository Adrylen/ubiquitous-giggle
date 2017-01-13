let x0,y0;
let x1,y1;
let d01,d12,scalaire;
let angle=0,sign=1;
let rotate = false;
let block;


function startRotation(e) {
	if(!rotate) {
		block = e.target.parentNode.parentNode;
		x0 = e.pageX; y0 = e.pageY;
		x1 = block.offsetLeft + block.offsetWidth / 2;
		y1 = block.offsetTop + block.offsetHeight / 2;
		d01 = Math.sqrt(Math.pow(x1-x0,2) + Math.pow(y1-y0,2));
	}
	else {
        let angle = ((sign * Math.acos(scalaire / (d01 * d12))) % (2*Math.PI)) * 180 / Math.PI + (block.getAttribute('angle') !== null ? parseInt(block.getAttribute('angle')) : 0);
        block.setAttribute('angle',angle);
    }
	rotate = !rotate;
}

document.addEventListener("mousemove", e => {
    if(rotate) {
        let x2,y2;
        x2 = e.pageX; y2 = e.pageY;
        d12 = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
        scalaire = (x0-x1)*(x2-x1) + (y0-y1)*(y2-y1);
        sign = (x0-x1)*(y2-y1) - (x2-x1)*(y0-y1);
        sign = (sign > 0) ? 1 : -1;
        let theta = ((sign * Math.acos(scalaire / (d01 * d12))) % (2*Math.PI)) * 180 / Math.PI + (block.getAttribute('angle') !== null ? parseInt(block.getAttribute('angle')) : 0);
        block.style.transform = "rotate("+theta+"deg)";
	}
});
