function getPage() {
	let url = window.location.href; // Obtener la URL actual
	let partes = url.split('/'); // Dividir la URL por "/"
	let ultimoValorConExtension = partes[partes.length - 1]; // Obtener el último valor con extensión
	let ultimoValor = ultimoValorConExtension.split('.')[0]; // Eliminar la extensión
	return ultimoValor;
}

// function getPartes() {
// 	var url = window.location.href; // Obtener la URL actual
// 	// let partes = url.split('/'); // Dividir la URL por "/"
// 	var partes = url.split("file:///C:/wamp64/www");
// 	// console.log(nueva);
// 	var nuevaurl = "http://localhost/";
// 	for (var i = 0; i < partes.length; i++) {
// 		nuevaurl + partes[i];
// 	}
// 	console.log(nuevaurl);

// }
// getPartes();
// alert("message?: DOMString");
// console.log(getPage());


let pag = getPage();
if (pag != "index") {
	window.location = "./index.html";

}

function localhost(arguments) {
	var urlCompleta = window.location.href;
	var nuevaURL = urlCompleta.replace("file:///C:/wamp64/www", "http://localhost");

	if (window.location.href != nuevaURL) {
		if (nuevaURL.includes("localhost")) {
			window.location.href = nuevaURL;
		}

	}

}
// crearCookie("USER", JSON.stringify({
// 	nombre: "carlos",
// 	correo: "mail@mail.com"
// }), 30);


localhost();
window.addEventListener("load", function (event) {
	let cerrar_sesion = document.getElementById("cerrar_sesion");
	cerrar_sesion.addEventListener("click", function (e) {
		e.preventDefault();
		eliminarCookie("USER");
		if (!(existeCookie("USER"))) {
			window.location.reload();
		}
	});

});
// console.log(urlCompleta.includes("localhost"));
// console.log(nuevaURL.includes("localhost"));
// // console.log(nuevaURL);
// // console.log(window.location.ancestorOrigins);
// console.log(window.location.href);
// // console.log(window.location.protocol);
// console.log(window.location.host);
// // console.log(window.location.port);
// // console.log(window.location.pathname);
// // console.log(window.location.search);
// // console.log(window.location.hash);
// // console.log(window.location.origin);
// // // console.log(window.location.xxxxxxxx);
// // // console.log(window.location.xxxxxxxx);
// // // console.log(window.location.xxxxxxxx);
// // // console.log(window.location.xxxxxxxx);
// // // console.log(window.location.xxxxxxxx);
