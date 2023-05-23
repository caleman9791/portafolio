// alert("message?: DOMString");

function registro(arguments) {

	let txt_nobre =
		document.getElementById(
			"exampleInputUsername1"
		);

	let txt_email =
		document.getElementById(
			"exampleInputEmail1"
		);
	let txt_pass =
		document.getElementById(
			"exampleInputPassword1"
		);

	let auth_form_btn =
		document.querySelector(
			".auth-form-btn"
		);
	auth_form_btn.id = "auth_form_btn";
	let btn_registro =
		document.getElementById(
			"auth_form_btn"
		);

	// txt_nobre.value = "";
	// txt_email.value = "";
	// txt_pass.value = "";

	txt_nobre.setAttribute("placeholder", "xxxxxx");
	txt_email.setAttribute("placeholder", "xxxxxx");
	txt_pass.setAttribute("placeholder", "xxxxxx");


	let formulario = document.querySelector("form");
	btn_registro.addEventListener("subtract", function (e) {
		e.preventDefault();
		console.log(this);

	});

	btn_registro.addEventListener("click", function (e) {
		e.preventDefault();
		console.log(this);
		console.log(txt_nobre.value);
		console.log(txt_email.value);
		console.log(txt_pass.value);

		if (txt_nobre.value != ""
			&& txt_email.value != ""
			&& txt_pass.value != "") {
			insertaUsuario(
				txt_nobre.value,
				txt_email.value,
				txt_pass.value
			);
			USERS = recuperarMatrizDeLocalStorage("USERS");
			console.log(USERS);
		} else {

			console.log('algo salio mal campos vacios ');
		}
		// insertaUsuario(nombre, email, pass);
	});


}
registro();
