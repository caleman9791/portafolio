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

if (!(LDB.Collection('USERS'))) {
	var USUERS = new LDB.Collection('USERS');
} else {
	var USUERS = LDB.Collection('USERS');
}

// console.log(tablas);
LDB.showCollections();
// LDB.clear();


function registro_main() {
	let btn_rgistrar = document.getElementById("registrar");


	btn_rgistrar.addEventListener("click", function (e) {
		e.preventDefault();
		let txt_nombre = document.getElementById("exampleInputUsername1");
		let txt_email = document.getElementById("exampleInputEmail1");
		USUERS.find({

				correo: txt_email.value,
			},
			function (results) {
				if (results[0]) {
					alert("existe");
				} else {

					USUERS.save({
						nombre: txt_nombre.value,
						correo: txt_email.value
					}, function (_items) {
						console.log('New items:', _items);
					});
				}
			});


	});
}
registro_main()
// var USER = {
//   nombre: 'Author name',
//   mail: 'Book title test'
// };
