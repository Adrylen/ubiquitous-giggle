let screenStyle;

function fullscreen(element) {
	// console.log(element.classList);
	// console.log(Object.keys(element.classList));
	if(Object.keys(element.classList).some(key => element.classList[key] == "full") === false) {
		element.classList.add("full");
		screenStyle = {
			top: element.style.top,
			left: element.style.left,
			width: element.style.width,
			height: element.style.height,
		};
		element.removeAttribute('style');
	}
	else {
		element.classList.remove("full");
		element.style.top = screenStyle.top;
		element.style.left = screenStyle.left;
		element.style.width = screenStyle.width;
		element.style.height = screenStyle.height;
	}
	// if(element.classList[0] === "noFull") {
	// 	element.classList.remove("noFull");
	// 	element.classList.add("full");
	// 	document.getElementById('fullscreen').firstElementChild.setAttribute("src", "../image/circle.jpg");
	// }
	// else if(element.classList[0] === "full") {
	// 	element.classList.remove("full");
	// 	element.classList.add("noFull");
	// 	document.getElementById('fullscreen').firstElementChild.setAttribute("src", "../image/pika.png");
	// }
}
