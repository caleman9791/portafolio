// alert('message?: DOMString');
// function Code() {
// 	let code_dropdown1 = document.querySelector(".code_dropdown1");
// 	let code_caja_dropdown1 = document.querySelector(".code_caja_dropdown1");
// 	code_dropdown1.addEventListener("click", function (arguments) {
// 		console.log(this);
// 		code_caja_dropdown1.classList.toggle("collapse");
// 	});
// }
// Code();

function getPage() {
	var url = window.location.href; // Obtener la URL actual
	var partes = url.split('/'); // Dividir la URL por "/"
	var ultimoValorConExtension = partes[partes.length - 1]; // Obtener el último valor con extensión
	var ultimoValor = ultimoValorConExtension.split('.')[0]; // Eliminar la extensión
	return ultimoValor;
}
// alert("message?: DOMString");
// console.log(getPage());


let pag = getPage();
if (pag != "index") {
	window.location = "./index.html";

}
// }
// iniciofijo();
