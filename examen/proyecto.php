<?php include("partials/session.php"); ?>
<?php include("partials/_header.html");?>
<?php include("partials/_top_bar.html");?>
<?php include("html/proyecto.html");?>
<?php include("utils.php");?>

<?php

/* INTENTO PARA MATAR SESION DESPUES DE 108 MINUTOS...
$expireAfter = 108;
    //Figure out how many seconds have passed
    //since the user was last active.
    $secondsInactive = time() - $_SESSION['last_activity'];
        
    //Check to see if they have been inactive for too long.
    if($secondsInactive <= $expireAfter){
        echo "Se pasó del tiempo";
    }



*/
  if($_SERVER['REQUEST_METHOD'] == 'POST' && (isset($_POST["proyecto"]["descripcion"]))){
      echo "PRESIONO SUBMIT";
      $input_aux = $_POST["proyecto"]["descripcion"];
      $input = $input_aux;

      if($input == '4 8 15 16 21 42' ){

        $tipo = 'SUCCESS';
      }else{
       
        $tipo = 'SYSTEM FAILURE';
      }
      insertProyecto($input, $tipo);

  }else if ($_SERVER['REQUEST_METHOD'] == 'POST' && !(isset($_POST["proyecto"]["descripcion"])) ){
    echo " INGRESA DATOS";

  }
?>
<?php include("partials/_footer.html");?>

 
