function download(event) {
	let text = event.target.parentNode.parentNode.getElementsByTagName('textarea')[0];
	if(text !== undefined) {
		let blob = new Blob([text.value], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "text.txt");
	}
}
