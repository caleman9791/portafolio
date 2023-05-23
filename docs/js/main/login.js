function login() {
	if (existeCookie("USER")) {
		console.log('existe');
		console.log(getCookieValue("USER"));
		// window.location.href = "./index.html";
	} else {
		let btn_login = document.querySelector(".auth-form-btn");
		// let txt_nombre = document.getElementById("txt_nombre");
		let txt_email = document.getElementById("exampleInputEmail1");
		let txt_password = document.getElementById("exampleInputPassword1");
<<<<<<< HEAD
		console.log(btn_login);
		btn_login.addEventListener("click", function (e) {
			e.preventDefault();
			console.log(this);
=======

		btn_login.addEventListener("click", function (e) {
			e.preventDefault();
			console.log('ok');
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d

			if (txt_email.value != ""
				&& txt_password.value != "") {
				if (inicioSecion(txt_email.value, txt_password.value)) {
<<<<<<< HEAD
					// console.log('ok');
					// window.location.href = "./index.html";
				} else {
					// console.log('existe');
=======
					console.log('ok');
					// window.location.href = "./index.html";
				} else {
					console.log('existe');
>>>>>>> 4bc57c5db64dd77eda1da4c43cca087d34d2c12d
				}
			} else {
				console.log('algo salio mal campos vacios ');
			}
		});
	};
}
login();
