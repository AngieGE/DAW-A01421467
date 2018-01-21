tabla();
/*suma("2");
contador("3");
promedios("4");
inversa("5");
problema("6");*/

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

function suma(pIdentificador){
	var Identificador=pIdentificador;
	var a = Math.floor((Math.random() * 100) + 1);
	var b = Math.floor((Math.random() * 100) + 1);
	texto = prompt("Suma " + a + " + "+b);
	var suma = a + b;
	if(texto==suma){
		res = 'Correcto. La suma de '+ a + ' + '+ b + ' = '+ suma;
	}else{
		res = 'Incorrecto. La suma de '+ a + ' + '+ b + ' = '+ suma;
	}
	var pIdentificador = document.getElementById(pIdentificador);
	Identificador.textContent= res;
}

function contador(pIdentificador){}
function promedios(pIdentificador){}
function inversa(pIdentificador){}
function problema(pIdentificador){}

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