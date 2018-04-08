console.log("Javascript funciona");

try {
    var ciencia = document.getElementById('ciencia');   //1
    ciencia.addEventListener("click", function(){
        myFunction2('Ciencia',1);});
    var deportes = document.getElementById('deportes'); //2
    deportes.addEventListener("click", function(){
        myFunction2('Deportes',2);});
    var musica = document.getElementById('musica');     //3
    musica.addEventListener("click", function(){
        myFunction2('Música',3);});
    var arte = document.getElementById('arte');         //4
    arte.addEventListener("click", function(){
        myFunction2('Arte',4);});
    var poli = document.getElementById('poli');         //5
    poli.addEventListener("click", function(){
        myFunction2('Política',5);});
    var empre = document.getElementById('empre');       //6
    empre.addEventListener("click", function(){
        myFunction2('Emprendimiento',6);});
    
    function myFunction2( titulo, num){
      //console.log("PASO 3");
      document.getElementById('TituloModal').innerHTML = titulo;
      switch (num) {
        case 1: //CIENCIA
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/eduardo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Guillermo González Camarena</h5><p>Científico, investigador e ingeniero. Creador de la televisión a color</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/manuel1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Manuel Sandoval Vallarta</h5><p>Físico. Aportaciones a la física de los rayos cósmicos</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/mario1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Mario Molina</h5><p> Ingeniero químico mexicano destacado por ser uno de los descubridores de las causas del agujero de ozono antártico.</p></div>'; //FALTA LA DE ROYER
            document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/rodolfo1.png" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Rodolfo Neri Vela</h5><p> Doctor en ingeniería mexicana. Primer astronauta mexicano en ir al espacio en su primera misión.</p></div>';
        break;
        case 2: //DEPORTES
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/eduardo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Guillermo González Camarena</h5><p>Científico, investigador e ingeniero. Creador de la televisión a color</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/manuel1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Manuel Sandoval Vallarta</h5><p>Físico. Aportaciones a la física de los rayos cósmicos</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/mario1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Mario Molina</h5><p> Ingeniero químico mexicano destacado por ser uno de los descubridores de las causas del agujero de ozono antártico.</p></div>'; //FALTA LA DE ROYER
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/rodolfo1.png" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Rodolfo Neri Vela</h5><p> Doctor en ingeniería mexicana. Primer astronauta mexicano en ir al espacio en su primera misión.</p></div>';
        break;
        case 3: //MUSICA
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/eduardo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Guillermo González Camarena</h5><p>Científico, investigador e ingeniero. Creador de la televisión a color</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/manuel1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Manuel Sandoval Vallarta</h5><p>Físico. Aportaciones a la física de los rayos cósmicos</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/mario1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Mario Molina</h5><p> Ingeniero químico mexicano destacado por ser uno de los descubridores de las causas del agujero de ozono antártico.</p></div>'; //FALTA LA DE ROYER
            document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/rodolfo1.png" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Rodolfo Neri Vela</h5><p> Doctor en ingeniería mexicana. Primer astronauta mexicano en ir al espacio en su primera misión.</p></div>';
        break;
        case 4: //ARTE
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/eduardo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Guillermo González Camarena</h5><p>Científico, investigador e ingeniero. Creador de la televisión a color</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/manuel1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Manuel Sandoval Vallarta</h5><p>Físico. Aportaciones a la física de los rayos cósmicos</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/mario1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Mario Molina</h5><p> Ingeniero químico mexicano destacado por ser uno de los descubridores de las causas del agujero de ozono antártico.</p></div>'; //FALTA LA DE ROYER
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/rodolfo1.png" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Rodolfo Neri Vela</h5><p> Doctor en ingeniería mexicana. Primer astronauta mexicano en ir al espacio en su primera misión.</p></div>';
         break;
        case 5: //POLITICA
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/eduardo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Guillermo González Camarena</h5><p>Científico, investigador e ingeniero. Creador de la televisión a color</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/manuel1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Manuel Sandoval Vallarta</h5><p>Físico. Aportaciones a la física de los rayos cósmicos</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/mario1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Mario Molina</h5><p> Ingeniero químico mexicano destacado por ser uno de los descubridores de las causas del agujero de ozono antártico.</p></div>'; //FALTA LA DE ROYER
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/rodolfo1.png" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Rodolfo Neri Vela</h5><p> Doctor en ingeniería mexicana. Primer astronauta mexicano en ir al espacio en su primera misión.</p></div>';
        break;
        case 6: //EMPRENDIMIENTO
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/eduardo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Guillermo González Camarena</h5><p>Científico, investigador e ingeniero. Creador de la televisión a color</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/manuel1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Manuel Sandoval Vallarta</h5><p>Físico. Aportaciones a la física de los rayos cósmicos</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/mario1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Mario Molina</h5><p> Ingeniero químico mexicano destacado por ser uno de los descubridores de las causas del agujero de ozono antártico.</p></div>'; //FALTA LA DE ROYER
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/rodolfo1.png" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Rodolfo Neri Vela</h5><p> Doctor en ingeniería mexicana. Primer astronauta mexicano en ir al espacio en su primera misión.</p></div>';
        break;
        default:
        break;
      }
      
    }   
} catch (error) {
    
}

var key=1;

switch (key) {
    case 1: //CIENCIA
        console.log("PASO 1");
        document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
        document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
        document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
        document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
        document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
        document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
        document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 
    break;
    case 2:
    document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
    document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
    document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
    document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
    document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
    document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
    document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 

    break;
    case 3:
    document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
    document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
    document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
    document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
    document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
    document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
    document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 

    break;
    case 4:
    document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
    document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
    document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
    document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
    document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
    document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
    document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 

    break;
    case 5:
    document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
    document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
    document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
    document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
    document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
    document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
    document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 

    break;
    case 6:
    document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
    document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
    document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
    document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
    document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
    document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
    document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 

    break;

    default:
    alert("Ocurrio un error");
        break;
}
