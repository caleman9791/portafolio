// LDB.showCollections();
// books.drop();

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
