<<<<<<< HEAD
var URERS = [{
	nombre: "nombre",
	email: "email",
	pass: "pass",
}];
var COOKE = {
	nombre: "nombre",
	email: "email",
	pass: "pass",
};
var URER = {
	nombre: "nombre",
	email: "email",
	pass: "pass",
};


=======
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
function elimina_nodos(contenedor) {
	while (contenedor.firstChild) {
		contenedor.removeChild(contenedor.firstChild);
	}
}

<<<<<<< HEAD

=======
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
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
<<<<<<< HEAD
	return false;
}
=======
	return null;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// function obtenerUltimoValorURLSinExtension() {
// 	var url = window.location.href; // Obtener la URL actual
// 	var partes = url.split('/'); // Dividir la URL por "/"
// 	var ultimoValorConExtension = partes[partes.length - 1]; // Obtener el último valor con extensión
// 	var ultimoValor = ultimoValorConExtension.split('.')[0]; // Eliminar la extensión
// 	return ultimoValor;
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
// Función para guardar una matriz de objetos en localStorage
function guardarMatrizEnLocalStorage(clave, matriz) {
	localStorage.setItem(clave, JSON.stringify(matriz));
}
// Función para recuperar una matriz de objetos de localStorage
function recuperarMatrizDeLocalStorage(clave) {
<<<<<<< HEAD
	console.log(localStorage.length);

	// if (localStorage.length == 0) {
	// 	insertaUsuario("nombre", "email", "pass");
	// }
	console.log(localStorage.getItem(clave));
	var matrizString = localStorage.getItem(clave);
	return JSON.parse(matrizString);
}

function insertaUsuario(nombre, email, pass) {

	// var URERS = " ";

	URERS = recuperarMatrizDeLocalStorage("USERS");

	console.log(USERS);
=======
	var matrizString = localStorage.getItem(clave);
	return JSON.parse(matrizString);
}
// var miMatriz = [{
// 	nombre: "Objeto 1",
// 	valor: 10
// }, {
// 	nombre: "Objeto 2",
// 	valor: 20
// }, {
// 	nombre: "Objeto 3",
// 	valor: 30
// }];
// Guardar la matriz en localStorage
// guardarMatrizEnLocalStorage("miMatriz", miMatriz);
// // Recuperar la matriz de localStorage
// var matrizRecuperada = recuperarMatrizDeLocalStorage("miMatriz");
// console.log(matrizRecuperada);	
function insertaUsuario(nombre, email, pass) {
	URERS = [];
	if (recuperarMatrizDeLocalStorage("USERS")) {
		URERS = recuperarMatrizDeLocalStorage("USERS");
	}
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
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
<<<<<<< HEAD
			if (typeof $data[i].nombre == "string" && typeof $data[i].email == "string" && typeof $data[i].email == "string") {
=======
			if (typeof $data[i].nombre == "string"
				&& typeof $data[i].email == "string"
				&& typeof $data[i].email == "string") {
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
				URERS.push($data[i]);
			}
		}
		guardarMatrizEnLocalStorage("USERS", URERS);
		$data = recuperarMatrizDeLocalStorage("USERS");
<<<<<<< HEAD
		// console.log($data);
=======
		console.log($data);
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
		crearCookie("USER", JSON.stringify(data), 5);
		// window.location.href = "./index.html";
		return true;
	} else {
		return false;
<<<<<<< HEAD
		console.log("existe");
	}
};

function registro(nombre, email, pass) {
=======
		// console.log("existe");
	}
};

function inicioSecion(email, pass) {
	URERS = [];

	if (recuperarMatrizDeLocalStorage("USERS")) {
		URERS = recuperarMatrizDeLocalStorage("USERS");
	}

	if (URER.length >= 1) {
		// //////////////////////////////////////
		for (var i = 0; i < URERS.length; i++) {

			if (URERS[i].email == email && URERS[i].pass == pass) {

				URER = {
					nombre: USERS.nombre,
					email: USERS.email,
					// pass: USERS.pass,
				};

			}

		}
		// ///////////////////////////////////////

	}
}

function inicioSecion(email, pass) {
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
	URERS = [];
	if (recuperarMatrizDeLocalStorage("USERS")) {
		URERS = recuperarMatrizDeLocalStorage("USERS");
	}
<<<<<<< HEAD
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
=======
	URER = false;
	for (var i = 0; i < URERS.length; i++) {
		if (URERS[i].email == email && URERS[i].pass == pass) {
			URER = {
				nombre: USERS.nombre,
				email: USERS.email,
				// pass: USERS.pass,
			};
		}
	}
	if (URER) {
		crearCookie("USER", JSON.stringify(URER), 5);
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
			if (typeof $data[i].nombre == "string"
				&& typeof $data[i].email == "string"
				&& typeof $data[i].email == "string") {
				URERS.push($data[i]);
			}
		}
		guardarMatrizEnLocalStorage("USERS", URERS);
		$data = recuperarMatrizDeLocalStorage("USERS");
		console.log($data);
		crearCookie("USER", JSON.stringify(data), 5);
		// window.location.href = "./index.html";
		return true;
	} else {
		// window.location.href = "./register.html";
		// console.log("existe");
	}
}
// //////////////////////////////////////////////////////////
function agregarScript(url) {
	let script = document.createElement('script'); // Crear el elemento <script>
	let fun_script = document.createElement('script'); // Crear el elemento <script>
	fun_script.src = `./js/fun/js.js`;
	script.src = `./js/${url}.js`;
	console.log(script.src); // Asignar la URL al atributo src del elemento <script>
	document.body.appendChild(fun_script);
	document.body.appendChild(script); // Agregar el elemento <script> al <body> del documento
}
// var nodoEliminar = document.getElementById("miNodo");
// // Obtener una referencia al padre del nodo
// var padreNodo = nodoEliminar.parentNode;
// // Eliminar el nodo del árbol DOM
// padreNodo.removeChild(nodoEliminar);
// 
// function elimina_nodo(nodo) {
// 	var padreNodo = nodoEliminar.parentNode;
// 	padreNodo.removeChild(nodoEliminar);
// }
//
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
