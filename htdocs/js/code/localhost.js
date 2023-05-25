function localhost(arguments) {
	var urlCompleta = window.location.href;
	var nuevaURL = urlCompleta.replace("file:///C:/wamp64/www", "http://localhost");

	if (window.location.href != nuevaURL) {
		if (nuevaURL.includes("localhost")) {
			window.location.href = nuevaURL;
		}

	}
}
