function login() {
	if (existeCookie("USER")) {
		console.log('existe');
		console.log(getCookieValue("USER"));
		window.location.href = "./index.html";
	} else {
		let btn_login = document.getElementById("btn_login");
		let txt_nombre = document.getElementById("txt_nombre");
		let txt_email = document.getElementById("txt_email");
		let txt_password = document.getElementById("txt_password");
		btn_login.addEventListener("click", function (e) {
			e.preventDefault();
			console.log('ok');

			if (txt_nombre.value != ""
				&& txt_email.value != ""
				&& txt_password.value != "") {
				if (insertaUsuario(txt_nombre.value, txt_email.value, txt_password.value)) {
					console.log('ok');
					// window.location.href = "./index.html";
				} else {
					console.log('existe');
				}
			} else {
				console.log('algo salio mal campos vacios ');
			}
		});
	};
}
login();
