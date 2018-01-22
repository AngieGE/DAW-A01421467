//tabla();
//suma();sionó
//contador();
//promedios();
inversa();
//problema();

function tabla(){  					/*ENTRADA 1*/
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

function suma(){
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

function contador(){
	console.log("entro a contador");
	var Identificador= document.getElementById('3');
	var texto= '<br>';
	document.getElementById('btn1').onclick = function(){
		console.log("presionó submit");
		var max = document.getElementById('tamanoArreglo').value;
		console.log("valor max: "+ max);
		for (var i = 0; i < max; i++) { //Que se escrivan max inputs para que ingrese los numeros
		Identificador.innerHTML = Identificador.innerHTML.concat('<input type="number" name="quantity " ' + 'id="numeros' +i+'"> <br>');
		console.log(Identificador.innerHTML);
		}
		
	}
	document.getElementById('btn2').onclick = function(){
		console.log("presionó ver Resultados");
		var max = document.getElementById('tamanoArreglo').value;
		console.log("valor max: "+ max);
		var neg=0, pos=0, cero=0;
		for (var i = 0; i < max; i++) { //Que se escrivan max inputs para que ingrese los numeros
			if (document.getElementById('numeros'+i) < 0) {
				neg=neg+1;
			}else if(document.getElementById('numeros'+i) > 0){
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

function promedios(){

}

function inversa(){
	var numero = document.getElementById('numerof3');
	for (var i = 0; i < range.length; i++) {
	var n = range[i];   
	}
}

function problema(){

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