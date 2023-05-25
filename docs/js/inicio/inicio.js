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


function inicio_main() {
	var USER = {
		nombre: "",
		correo: ""
	};
	if (!(LDB.Collection('USERS'))) {
		var USUERS = new LDB.Collection('USERS');
	} else {
		var USUERS = LDB.Collection('USERS');
	}
	// eliminarCookie("USER");
	if (getCookieValue("USER")) {
		console.log(getCookieValue("USER"));

	};


	if (getCookieValue("USER")) {
		console.log(getCookieValue("USER"));

	};

	// USUERS.drop();
	// USUERS = LDB.Collection('USERS');

	// USUERS.find({
	// 		nombre: "carlos",
	// 		correo: "mail@mail.com"
	// 	},
	// 	function (results) {
	// 		if (results[0]) {
	// 			USER = {
	// 				nombre: results[0].nombre,
	// 				correo: results[0].correo
	// 			};
	// 		} else {
	// 			USUERS.save({
	// 					nombre: "carlos",
	// 					correo: "mail@mail.com"
	// 				},
	// 				function (_items) {
	// 					console.log('New items:', _items);
	// 				});

	// 		}
	// 	});

	var btn_inicio = document.getElementById("btn_inicio");


	btn_inicio.addEventListener("click", function (e) {
		e.preventDefault();
		var txt_nombre = document.getElementById("exampleInputUsername1");
		var txt_email = document.getElementById("exampleInputEmail1");

		USUERS.find({
				nombre: txt_nombre.value,
				correo: txt_email.value
			},
			function (results) {
				if (results[0]) {
					USER = {
						nombre: results[0].nombre,
						correo: results[0].correo
					};
				} else {
					USER = {
						nombre: "",
						correo: ""
					};

				}
			});

		if (USER.name != "") {
			crearCookie("USER", JSON.stringify({
				nombre: txt_nombre.value,
				correo: txt_email.value
			}), 30);
			if (existeCookie("USER")) {
				console.log("COOKE EXISTE");
				console.log('Inicio');
				window.location.href = "./index.html";
			}


		} else {
			console.log('Error');
		}

	});
}

// window.addEventListener("load", function (arguments) {

inicio_main();
// });
