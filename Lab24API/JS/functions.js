
var piezas = document.getElementsByClassName('movil');//guardamos todos los elementos en piezas que tengan el nombre de la clase movil

var tamWidh = [192,192,192,272,222,232,192,230,192];
var tamHeight = [134,134,134,214,164,174,134,172,134];//prediseñado el tamaño de las piezas

//se agrega el tamaño del alto y ancho a cada pieza
for(var i=0;i<piezas.length;i++){
	piezas[i].setAttribute("width", tamWidh[i]);
	piezas[i].setAttribute("height",tamHeight[i]);
	piezas[i].setAttribute("y", Math.floor((Math.random() * 10) + 1)); //para que las piezas esten esparcidas
	piezas[i].setAttribute("x", Math.floor((Math.random() * 409)+1));//las piezas esten esparcidas
	//para mover piezas, primero se agrega onmousedown y ejecutara la funcion
	piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
}
//variables que van alamecenar informacion de movimiento
var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
	elementSelect = reordenar(evt);//parametro, el evento seleccionado
	currentX = evt.clientX;   //guardar posicion del mouse , cuando se produjo el click     
	currentY = evt.clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));   //obtenemos la posicion x y y de la pieza  
	currentPosy = parseFloat(elementSelect.getAttribute("y")); //obtenemos la posicion x y y de la pieza
	elementSelect.setAttribute("onmousemove","moverElemento(evt)"); //va a llmar a la funcion mover elemento
}
function moverElemento(evt){
	//distancia recorrida del mouse x y y del mouse
	var dx = evt.clientX - currentX;
	var dy = evt.clientY - currentY;
	//para que el elemento se moviliza la misma distancia que se ha movido el mouse, agregamos
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	//actualizamos la posicion del elemento
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	//guardamos nuevamente posicion del mouse 
	currentX = evt.clientX;        
	currentY = evt.clientY;
	//para deselecionar elemento
	elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
	elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
	iman();
}

function deseleccionarElemento(evt){
	testing();
	//elimamos los atributos de seleccionar elemnto
	if(elementSelect != 0){			
		elementSelect.removeAttribute("onmousemove");
		elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("onmouseup");
		elementSelect = 0;
	}
}
//variable global, que almacena todo el el entorno grafico
var enetorno = document.getElementById('entorno');
//las piezasno se ponga detras de la otra, se añadio en atributo clase padre y se implementa lo sigquiente
function reordenar(evt){
	var padre = evt.target.parentNode;
	var clone = padre.cloneNode(true);//se guarda el elemento contendor de la pieza seleccionada
	var id = padre.getAttribute("id");//un clone de padre
	entorno.removeChild(document.getElementById(id));
	entorno.appendChild(clone);
	return entorno.lastChild.firstChild;
}

//iman, cuando una pieza se acerque a una posicion, esta se adhiera automaticamente
var origX = [194,304,414,131,289,414,190,285,414];    //posiciones donde deben ir las piezas
var origY = [200,200,200,291,318,295,465,426,465];

function iman(){
	for(var i=0;i<piezas.length;i++){
		if (Math.abs(currentPosx-origX[i])<10 && Math.abs(currentPosy-origY[i])<10) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}
//comprobar que el rompecabezas ha sido armado correctamente


var win = document.getElementById("win");

function testing() {
	var bien_ubicada = 0; //contador 
	var padres = document.getElementsByClassName('padre');
	for(var i=0;i<piezas.length;i++){
		var posx = parseFloat(padres[i].firstChild.getAttribute("x"));    
		var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
		ide = padres[i].getAttribute("id");
		if(origX[ide] == posx && origY[ide] == posy){
			bien_ubicada = bien_ubicada + 1;
		}
	}
	if(bien_ubicada == 9){//si el contador tiene 9 es que estan bien ubicadas
		alert('good job');
	}
}

