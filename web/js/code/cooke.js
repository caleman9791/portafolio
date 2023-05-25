function crearCookie(nombre, valor, diasExpiracion) {
	var fecha = new Date();
	fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
	var expiracion = "expires=" + fecha.toUTCString();
	document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function eliminarCookie(nombre) {
	document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function existeCookie(nombre) {
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i].trim();
		if (cookie.indexOf(nombre + '=') === 0) {
			return true;
		}
	}
	return false;
}

function getCookieValue(nombreCookie) {
	var nombre = nombreCookie + "=";
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i].trim();
		if (cookie.indexOf(nombre) === 0) {
			let obj = cookie.substring(nombre.length, cookie.length);
			return JSON.parse(obj);
		}
	}
	return null;
}
