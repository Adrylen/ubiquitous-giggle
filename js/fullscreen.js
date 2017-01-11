function fullscreen(id) {
	let element = document.getElementById(id);
	if(element.classList[0] === "noFull") {
		element.classList.remove("noFull");
		element.classList.add("full");
		document.getElementById('fullscreen').firstElementChild.setAttribute("src", "../image/circle.jpg");
	}
	else if(element.classList[0] === "full") {
		element.classList.remove("full");
		element.classList.add("noFull");
		document.getElementById('fullscreen').firstElementChild.setAttribute("src", "../image/pika.png");
	}
}
