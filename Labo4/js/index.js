//problema();

function verTabla(){  				/*ENTRADA 1 TERMINADA*/
	var texto = prompt("Ingresa un número");
	var res= new Array(texto);
	for (var x = 1; x < 4; x++) {
		for (var y = 0; y < texto; y++) {
			if (x==1) {
				var identificador = document.getElementById("numerados");
				res[y]=y+1;
			}else if(x==2){
				var identificador = document.getElementById("cuadrado");
				res[y]= Math.pow(y+1, 2);
			}else{
				var identificador = document.getElementById("cubo");
				res[y]= Math.pow(y+1, 3);
			}
		}
		identificador.innerHTML = res;
	}
}

function verSuma(){					/*ENTRADA 2 TERMINADA*/
	var Identificador= document.getElementById('2');
	var a = Math.floor((Math.random() * 100) + 1);
	var b = Math.floor((Math.random() * 100) + 1);
	texto = prompt("Suma " + a + " + "+b);
	var suma = a + b;
	if(texto==suma){
		res = 'Correcto. La suma de '+ a + ' + '+ b + ' = '+ suma;
	}else{
		res = 'Incorrecto. La suma de '+ a + ' + '+ b + ' = '+ suma;
	}
	Identificador.innerHTML = res;
}

function verContador(){				/*FUNCION 1 TERMINADA*/
	var Identificador= document.getElementById('3'); //Las cajitas
	var texto= '<br>';
	var max = document.getElementById('tamanoArreglo').value;
	for (var i = 0; i < max; i++) { //Que se escrivan max inputs para que ingrese los numeros
		Identificador.innerHTML = Identificador.innerHTML.concat('<input type="number" name="quantity " ' + 'id="numeros' +i+'"> <br>');
		console.log(Identificador.innerHTML);
	}
	document.getElementById('btn2').onclick = function(){
		console.log("presionó ver Resultados");
		var max = document.getElementById('tamanoArreglo').value;
		var sMax= max.value;
		console.log("valor max: "+ sMax);
		var neg=0, pos=0, cero=0;
		for (var i = 0; i < max; i++) { //Que se escrivan max inputs para que ingrese los numeros
			var valor = document.getElementById('numeros'+i).value;
			console.log("valor: " + valor);
			if ( valor < 0) {
				neg=neg+1;
			}else if(valor > 0){
				pos=pos+1;
			}else{
				cero=cero+1;
			}
		}
		console.log("neg: "+ neg +"pos: "+ pos+ "cero: "+ cero);
		var res= document.getElementById('pos');
		res.innerHTML=pos;
		res= document.getElementById('neg');
		res.innerHTML=neg;
		res= document.getElementById('cero');
		res.innerHTML=cero;
		
	}
}

function VerPromedios(){			/*FUNCION 1 TERMINADA*/
	var res;
	var promedio = 0;
	var cal;
	for (var i = 0; i < 3; i++) {
		for (var x = 0; x < 3; x++) {
			cal = document.getElementById('a'+(i+1)+'c'+(x+1)).value;
			promedio = promedio + +cal;
		}
		promedio=promedio/3;
		res = document.getElementById('a'+(i+1)+'p');
		res.innerHTML = promedio;
		promedio = 0;
	}
}

function verInversa(){  				/*FUNCION 3 TERMINADA*/
	var number = document.getElementById('numerof3').value;
	console.log('number: '+ number);
	var sNumber = number.toString();
	var res = '';
	console.log('longitud: '+ sNumber.length);
	for (var i = number.length-1; i >=0; i--) {
		console.log('number en i: '+number[i]);
		res= res.concat(number[i]); 
	}
	console.log(res);	
	number = document.getElementById('5');
	number.innerHTML = 'Numero inverso: '+res;	
}

function verProblema(){
	var ptsAlice, totAlice=0; 
	var ptsBob, totBob=0;
	for (var i = 0; i <3; i++) {
		ptsAlice = document.getElementById('a'+i).value; 
		ptsBob = document.getElementById('b'+i).value; 
		if (ptsBob > ptsAlice) {
			totBob = totBob + 1;
		}else if(ptsBob < ptsAlice){
			totAlice = totAlice + 1;
		}
	}
	console.log('pts bob: '+ totBob + 'ptsAlice: ' + totAlice);
	ptsBob = document.getElementById('bob');
	ptsBob.innerHTML = totBob;
	ptsAlice = document.getElementById('alice');
	ptsAlice.innerHTML = totAlice;
}

/*
ESTOY EN DEVELOP
<scrypt type

Es un lenguaje no tipado. (Podemos estar trabajando con un dato y despues decirle si es int, float, string..)
Variables:
	Number
	String
	Boolean 
	Undefined
	Null
Puedes no declarar las variables, pero es buena practica SI hacerlo.
Declarar variables
1) nombre_var;
2)var nombre;
3)let nombre; -> el alcance de esta variable es donde alcance las llaves (dentrod e esas llaves)

Se recomienda usar el === no el ==
&& || !

Number.MAX_VALUE
Number.MIN_VALUE

alert(Cargando pagina)
let respuesta = promt("Cómo te llamas?");

podemos guardar funciones en variables
Tenemos arreglos. Son asociativos -> 

for(let propiedad in clase){...}
*/