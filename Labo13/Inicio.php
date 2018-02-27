<?php include("partials/_header.html"); ?>
<?php
//<?php// include("partials/_bienvenido.html");
session_start();
$var_value = $_SESSION['usuario'];
 echo '<div class="jumbotron jumbotron-fluid" id="jumboBienvenido">
  <div class="container">
    <h1 class="display-3">Bienvenido '.$var_value.'</h1>
    <p class="lead">Bienvenido a mi lab 13, conoce el cotenido de este y algunas preguntas de laboratorio.</p>
  </div>
</div>'
?>
<?php include("partials/_footer.html"); ?>
