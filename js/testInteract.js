let done = true;
function changeColor() {
	let color = document.body.style.backgroundColor;
	if(!done) { document.body.style.backgroundColor = "#423a3a"; done = true; }
	else { document.body.style.backgroundColor = "#42356a"; done = false; }
}
