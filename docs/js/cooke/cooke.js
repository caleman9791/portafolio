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
	return false;
}


function obtenerUltimoValorURLSinExtension() {

	let url = window.location.href; // Obtener la URL actual
	let partes = url.split('/'); // Dividir la URL por "/"
	let ultimoValorConExtension = partes[partes.length - 1]; // Obtener el último valor con extensión
	let ultimoValor = ultimoValorConExtension.split('.')[0]; // Eliminar la extensión
	return ultimoValor;

}

window.addEventListener("load", function () {
	var ultimoValor = obtenerUltimoValorURLSinExtension();
	// agregarScript(ultimoValor);
	if (ultimoValor != "login" || ultimoValor != "register") {
		if (existeCookie("USER")) {
			// console.log(window.cookie);
			console.log(getCookieValue("USER"));
		} else {
			let mensaje_no_cooke = document.querySelector(".mensaje_no_cooke");

			if (!(mensaje_no_cooke == undefined)) {
				mensaje_no_cooke.textContent = "No has iniciado sesión ";
				mensaje_no_cooke.style.display = "block";

			} else {

				// alert("No existe boton");
				// <div class="w3-panel w3-pale-red w3-leftbar w3-border-red">
				// <p>London is the most populous city in the United Kingdom,
				// with a metropolitan area of over 9 million inhabitants.</p>
				// </div>
				let elementoNuevo = document.createElement("div");
				let parr = document.createElement("p");
				parr.textContent = "Esta sección tiene fallas "
					+ "estaré actualizando periódicamente. "
					+ "Gracias por visitar. Puedes escribirme a "
					+ "la mensajería de esta pagina para mas información.";
				elementoNuevo.setAttribute("class", "w3-panel w3-padding w3-pale-red w3-leftbar w3-border-red");
				elementoNuevo.appendChild(parr);
				let elementoPadre = document.querySelector(".content-wrapper");

				elementoPadre.insertBefore(elementoNuevo, elementoPadre.firstChild);
			}
			console.log("NO COOKE");
		}
	}

});
