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
			console.log('Inicio');
			window.location.href = "./index.html";

		} else {
			console.log('Error');
		}

	});
}

window.addEventListener("load", function (arguments) {

	inicio_main();
});
