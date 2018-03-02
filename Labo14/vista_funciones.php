<?php include("partials/_header.html"); ?>
<?php include("partials/_funciones.html"); ?>
<?php include("partials/_footer.html"); ?>

<?php
session_start();
  $fruit_name = isset($_POST["fruta"]) && ($_POST["fruta"]);
  $R1 = isset($_POST["customRadioInline1"]);
  $R2 = isset($_POST["customRadioInline2"]);

  if($_SERVER['REQUEST_METHOD'] == 'POST'){
    require_once "util.php";
    $_SESSION['fruta'] = $_POST["fruta"];
    echo 'R1: '.$R1.'<br>';
    echo 'R2: '.$R2.'<br>';

    echo getFruits($_SESSION['fruta']);
    //echo getCheapOrExpensiveFruits("15");

   //$result = getFruits($_SESSION['fruta']);
  }
 ?>
