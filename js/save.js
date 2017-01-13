function download(event) {
	let text = event.target.parentNode.parentNode.getElementsByTagName('textarea')[0];
	let canvas = event.target.parentNode.parentNode.getElementsByTagName('canvas')[0];
	if(text !== undefined) {
		let blob = new Blob([text.value], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "text.txt");
	}
	if(canvas !== undefined) {
		ctx = canvas.getContext('2d');
		canvas.toBlob( blob => saveAs(blob, "pretty image.png"));
	}
}
