// alert('message?: DOMString');
function Code() {
	let code_dropdown1 = document.querySelector(".code_dropdown1");
	let code_caja_dropdown1 = document.querySelector(".code_caja_dropdown1");
	code_dropdown1.addEventListener("click", function (arguments) {
		console.log(this);
		code_caja_dropdown1.classList.toggle("collapse");
	});
}
// Code();
