var precio;
var iva;
var precioFinal;
var y = '';

function calcTotal(){
	console.log("HOLA");
	for (var i = 1; i <= 3; i++) {
	
	var x = document.getElementById(i).value;
	y = y.concat(''+x + '');
	console.log(y);
	

	}
	console.log(y);
}
