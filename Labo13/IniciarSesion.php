<?php include("partials/_header.html"); ?>
<?php include("partials/_forma.html"); ?>

<?php include("partials/_footer.html"); ?>


<?php
// Start the session
session_start();
$idUsuario = isset($_POST["usuario"]) && ($_POST["usuario"]);
$usuario="angie";
$idContrasenia = isset($_POST["contrasenia"]) && ($_POST["contrasenia"]); ;
$contrasenia="123";

if($_SERVER['REQUEST_METHOD'] == 'POST'){
//  echo "usuario: ".$idUsuario." contraseña: ".$idContrasenia." ";

  if ($idUsuario == $usuario && $idContrasenia ==$contrasenia) {
     $_SESSION['usuario'] = $_POST["usuario"];
    //echo "usuario: ".$idUsuario." contraseña: ".$idContrasenia." ";
    //include("partials/_enSesion.html");
    include("partials/_submit.html");
  }else{
    include("modal/_fail.php");
    echo "<script> $('#myModal').modal('show') </script>";
  }

}
?>
