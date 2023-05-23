var URERS = [];
var COOKE = [];
var URER = {
	nombre: "",
};


function elimina_nodos(contenedor) {
	while (contenedor.firstChild) {
		contenedor.removeChild(contenedor.firstChild);
	}
}


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
// Función para guardar una matriz de objetos en localStorage
function guardarMatrizEnLocalStorage(clave, matriz) {
	localStorage.setItem(clave, JSON.stringify(matriz));
}
// Función para recuperar una matriz de objetos de localStorage
function recuperarMatrizDeLocalStorage(clave) {
	var matrizString = localStorage.getItem(clave);
	return JSON.parse(matrizString);
}

function insertaUsuario(nombre, email, pass) {
	URERS = [];
	if (recuperarMatrizDeLocalStorage("USERS")) {
		URERS = recuperarMatrizDeLocalStorage("USERS");
	}
	var no_existe = true;
	for (var i = 0; i < URERS.length; i++) {
		if (URERS[i].email == email) {
			no_existe = false;
		}
	}
	if (no_existe) {
		var data = {
			nombre: nombre,
			email: email,
			pass: pass,
		};
		if (recuperarMatrizDeLocalStorage("USERS")) {
			URERS = recuperarMatrizDeLocalStorage("USERS");
		} else {
			URERS = [];
		}
		URERS.push(data);
		guardarMatrizEnLocalStorage("USERS", URERS);
		// URERS = recuperarMatrizDeLocalStorage("USERS");
		let $data = recuperarMatrizDeLocalStorage("USERS");
		URERS = [];
		for (var i = 0; i < $data.length; i++) {
			if (typeof $data[i].nombre == "string" && typeof $data[i].email == "string" && typeof $data[i].email == "string") {
				URERS.push($data[i]);
			}
		}
		guardarMatrizEnLocalStorage("USERS", URERS);
		$data = recuperarMatrizDeLocalStorage("USERS");
		// console.log($data);
		crearCookie("USER", JSON.stringify(data), 5);
		// window.location.href = "./index.html";
		return true;
	} else {
		return false;
		console.log("existe");
	}
};

function registro(email, pass) {
	URERS = [];
	if (recuperarMatrizDeLocalStorage("USERS")) {
		URERS = recuperarMatrizDeLocalStorage("USERS");
	}
	// console.log(USERS);
}

function inicioSecion(email, pass) {
	console.log(email);
	console.log(pass);
	URERS = {};
	if (recuperarMatrizDeLocalStorage("USERS")) {
		URERS = recuperarMatrizDeLocalStorage("USERS");
		// console.log(URERS);
		console.log(URERS.length);
		for (var i = 0; i < USERS.length; i++) {
			console.log(URERS[i]);
		}
	}
}

function agregarScript(url) {
	let script = document.createElement('script');
	script.src = `./js/main/${url}.js`;
	// console.log(script.src);
	document.head.appendChild(script);
}

function pagina() {
	var url = window.location.href; // Obtener la URL actual
	var partes = url.split('/'); // Dividir la URL por "/"
	var ultimoValorConExtension = partes[partes.length - 1]; // Obtener el último valor con extensión
	var ultimoValor = ultimoValorConExtension.split('.')[0]; // Eliminar la extensión
	return ultimoValor;
}

function obtenerUltimoValorURLSinExtension() {
	var url = window.location.href; // Obtener la URL actual
	var partes = url.split('/'); // Dividir la URL por "/"
	var ultimoValorConExtension = partes[partes.length - 1]; // Obtener el último valor con extensión
	var ultimoValor = ultimoValorConExtension.split('.')[0]; // Eliminar la extensión
	return ultimoValor;
}
// let ultimoValor = obtenerUltimoValorURLSinExtension();
// //////////////////////////////////////////////////////////////////////////////////////
// localStorage.clear();
