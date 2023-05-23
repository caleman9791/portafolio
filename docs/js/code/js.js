window.addEventListener("load", function (event) {
	let ultimoValor = obtenerUltimoValorURLSinExtension();
	agregarScript(ultimoValor);
	// document.body.style.visibility = "hidden";
	// eliminarCookie("USER");
	console.log("CARGARO");

	console.log(pagina()); // Imprime el último valor de la URL en la consola

	//  Al cargar #Inicio  
	if (ultimoValor != "login" || ultimoValor != "register") {
		if (existeCookie("USER") == false) {
			// window.location.href = "./login.html";
		}

		if (getCookieValue("USER")) {
			COOKE = getCookieValue("USER");
			URER.nombre = COOKE.nombre;
			console.log(URER.nombre);
			// let user_info = document.querySelector(".user-info");
			// elimina_nodos(user_info);
			// var _div = document.createElement('div');
			// _div.textContent = URER.nombre;
			// user_info.appendChild(_div);
		} else {
			console.log("No existe la COOKE");
			// window.location.href = "./login.html";
		};

		// window.location.href = "./index.html";
		// document.body.style.visibility = "visible";
	} else {
		// document.body.style.visibility = "visible";
	}
});
