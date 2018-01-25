var precioFInal = 0;

function calcTotal(){
	console.log("HOLA");
	let precio;
	let IVA;
	let precioFinal;
	let precioFinalTotal=0;
	for (var i = 1; i <= 3; i++) {
		var cantidadDeArticulos = document.getElementById(i).value;

		if(i==1){
			precio=230;
			IVA=1.20;
		}else if(i==2){
			precio=560;
			IVA=1.15;
		}else{
			precio=2500;
			IVA=1.10;
		}
		precioFinal = precio * IVA * cantidadDeArticulos;
		console.log("Precio Final: " + precioFinal);
		precioFinalTotal = precioFinalTotal + +precioFinal;
		console.log("Precio Final Total: " + precioFinalTotal);
	}
	document.write('El precio total de lo que debe pagar más el IVA es: ' + precioFinalTotal);
}
