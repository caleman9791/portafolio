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

	//  Al cargar #Inicio  
	if (ultimoValor != "login" || ultimoValor != "register") {
		if (existeCookie("USER") == false) {
			// window.location.href = "./login.html";
		}

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
		// document.body.style.visibility = "visible";
	}
});
