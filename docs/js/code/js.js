<<<<<<< HEAD
window.addEventListener("load", function (event) {

	let enlace = document.querySelectorAll("a");
	for (var i = 0; i < enlace.length; i++) {

		enlace[i].addEventListener("click", (event) => {
			event.preventDefault();
			console.log(event.target);
			console.log(event.target.tagName);


		});
	}

	// localStorage.clear();
	//	console.log(localStorage.length);
	let ultimoValor = obtenerUltimoValorURLSinExtension();
	agregarScript(ultimoValor);

=======
var URERS;
var COOKE;
var URER = {
	nombre: "",
};
// //////////////////////////////////////////////////////////////////////////////////////

function agregarScript(url) {

	let script = document.createElement('script'); // Crear el elemento <script>
	let fun_script = document.createElement('script'); // Crear el elemento <script>
	fun_script.src = `./js/code/fun.js`;
	script.src = `./js/main/${url}.js`;
	console.log(fun_script.src);
	console.log(script.src); // Asignar la URL al atributo src del elemento <script>
	document.body.appendChild(fun_script);
	document.body.appendChild(script); // Agregar el elemento <script> al <body> del documento
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
var ultimoValor = obtenerUltimoValorURLSinExtension();
agregarScript(ultimoValor);

// //////////////////////////////////////////////////////////////////////////////////////

// localStorage.clear();

window.addEventListener("load", function (event) {

	// document.body.style.visibility = "hidden";
	// eliminarCookie("USER");
	console.log("CARGARO");
	// console.log(ultimoValor); // Imprime el último valor de la URL en la consola
	// let ultimoValor = obtenerUltimoValorURLSinExtension();
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
	//  Al cargar #Inicio  
	if (ultimoValor != "login" || ultimoValor != "register") {
		if (existeCookie("USER") == false) {
			// window.location.href = "./login.html";
		}
<<<<<<< HEAD

		if (getCookieValue("USER")) {
			COOKE = getCookieValue("USER");
			URER.nombre = COOKE.nombre;

		} else {
			//	console.log("No existe la COOKE");
			// window.location.href = "./login.html";
		};

		// window.location.href = "./index.html";
		// document.body.style.visibility = "visible";
	} else {
		// if (ultimoValor == "register") {
		// 	registro();

		// }
=======
		let fa = document.querySelector(".fa-sign-out");
		// let fa = document.querySelector(".fa-sign-out");
		fa.parentElement.id = "btn_cerrar_cesion";
		let btn_cerrar_cesion = document.getElementById("btn_cerrar_cesion");
		btn_cerrar_cesion.addEventListener("click", function (e) {
			e.preventDefault();
			// document.body.style.visibility = "hidden";
			if (existeCookie("USER")) {
				eliminarCookie("USER");
				location.reload();
			} else {
				// window.location.href = "./index.html";
			}
		});
		console.log('existe');
		// console.log(getCookieValue("USER"));
		COOKE = getCookieValue("USER");
		// console.log(COOKE);
		URER.nombre = COOKE.nombre;
		console.log(URER.nombre);
		let user_info = document.querySelector(".user-info");
		elimina_nodos(user_info);
		var _div = document.createElement('div');
		_div.textContent = URER.nombre;
		user_info.appendChild(_div);
		// window.location.href = "./index.html";
		// document.body.style.visibility = "visible";
	} else {
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
		// document.body.style.visibility = "visible";
	}
});
