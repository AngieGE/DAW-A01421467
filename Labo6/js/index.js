function cambiaEstilo(){
    console.log('HOLA');
    let texto = document.getElementById("eventoLetra");
    texto.style.fontFamily = "Impact";
}
function timer(){
   setTimeout(function()
    {
      let parrafo = document.getElementById("parrafo");
      parrafo.style.visibility =  "visible";
    },3000);
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", "flores");
}
function drop(ev) {
    //ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
var entrada = document.getElementById("contraseña");
var min = document.getElementById("minuscula");
var may = document.getElementById("mayuscula");
var num = document.getElementById("numero");
var long = document.getElementById("minCar");
var comparacion;
var listo=0;

entrada.onkeyup = function LeeEntrada() {
	verfMin();
	verfMay();
	verfNum();
	verfLong();
  }

 function verfMin(){
 	comparacion = /[a-z]/g;
 	if(entrada.value.match(comparacion)) {
 	    min.classList.remove("mala");
    	min.classList.add("buena");
    	listo=listo+1;
  	} else {
  		min.classList.remove("buena");
    	min.classList.add("mala");
    	listo=listo-1;
  	}
 }

  function verfMay(){
 	comparacion = /[A-Z]/g;
 	if(entrada.value.match(comparacion)) {
 	    may.classList.remove("mala");
    	may.classList.add("buena");
    	listo=listo+1;
  	} else {
  		may.classList.remove("buena");
    	may.classList.add("mala");
    	listo=listo-1;
  	}
 }

  function verfNum(){
 	 comparacion = /[0-9]/g;
 	if(entrada.value.match(comparacion)) {
 	    num.classList.remove("mala");
    	num.classList.add("buena");
    	listo=listo+1;
  	} else {
  		num.classList.remove("buena");
    	num.classList.add("mala");
    	listo=listo-1;
  	}
 }

  function verfLong(){
 	if(entrada.value.length >= 8) {
	    long.classList.remove("mala");
	    long.classList.add("buena");
	    listo=listo+1;
  	} else {
	    long.classList.remove("buena");
	    long.classList.add("mala");
	    listo=listo-1;
  	}
 }

 function verificar(){
 	if (listo == 4 ) {
 		alert("Gracias");
 	}
 }

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
