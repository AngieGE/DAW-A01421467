<?php include("_header.html"); ?>

<?php
	function calcularPromedio1(){
	    $c1 = $_GET['cal1']; 
	    $c2 = $_GET['cal2']; 
	    $c3 = $_GET['cal3']; 
	    $promedio = ($c1 + $c2 + $c3) / 3;
	    return "<br>Tu promedio es: ".$promedio;
	}
	if(isset($_GET['boton'])){ 
		calcularPromedio1();
	} 
?>

<?php
	function calcularMedia(){
	    $miArreglo = array(1, 32, 45, 76, 2, 90, 13);
	    for ($i=0; $i <count($miArreglo) ; $i++) { 
	    	if($i == (count($miArreglo)-1)){
	    		echo " ".$miArreglo[$i];
	    	}else
	    		echo " ".$miArreglo[$i].",";
	    }
	    sort($miArreglo);
	    $index= (count($miArreglo))/2;
	    echo "<br> La mediana es: ".$miArreglo[$index]."<br>";
	} 
?>

<?php
	function mostrarArreglo(){
		$miArreglo=array(23, 4, 43, 65, -1, 0, 54);
		$promedio=0;
		$media=0;
	    echo "<br> El arreglo es: ";
	    foreach ($miArreglo as $arreglo) {
	    	echo " ".$arreglo.", ";
	    	$promedio += $arreglo;
	    }
	    $promedio= $promedio/count($miArreglo);
	    echo " <br> Promedio: ".$promedio."<br> Arreglo de menor a mayor: " ;
	    sort($miArreglo);
	    foreach ($miArreglo as $arreglo) {
	    	echo " ".$arreglo.", ";
	    }
	    echo "<br> Arreglo de mayor a menor: " ;
	    rsort($miArreglo);
	    foreach ($miArreglo as $arreglo) {
	    	echo " ".$arreglo.", ";
	    }
	} 

?>


<?php include("_footer.html"); ?>

