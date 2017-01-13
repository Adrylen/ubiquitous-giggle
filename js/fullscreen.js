let screenStyle;
//a supp
function fullscreen(element) {
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
}
