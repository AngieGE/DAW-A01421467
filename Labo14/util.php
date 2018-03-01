<?
//Conectar base de datos
function conectDb(){
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "lab14";

	$con = mysqli_connect($servername, $username, $password, $dbname);

	//revisa la conexión
	if (!$con) {
		die("Conection failed " . mysqli_connect_error());
	}

	return $con;
}

//Cerrar Bases de datos
function closeDb($mysql){
	mysqli_close($mysql);
}

//Funcion para obtener todos los objetos de una base de datos
function getFruits(){
	$conn = conectDb();

	$sql = "SELECT name , units, quantity, price, country
					FROM Fruit";

	$result = mysqli_query($conn, $sql);

	closeDb($conn);

	return $result;
}

//Funcion para consulta 1
function getFruitsByName($fruit_name){
	$conn = conectDb();

	$sql = "SELECT name, units, quantity, price, country
					FROM Fruit
					WHERE name LIKE '%".$fruit_name."%'";

	$result = mysqli_query($conn, $sql);

	closeDb($conn);

	return $result;
}

//Funcion para consulta 2
function getCheapestFruits($cheap_price){
	$conn = conectDb();
	$sql = "SELECT name, units, quantity, price, country
					FROM Fruit
					WHERE price <- '".$cheap_price."'";

 $result = mysqli_query($conn, $sql);

 closeDb($conn);

 return $result;
}

?>
