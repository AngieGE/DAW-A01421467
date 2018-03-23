<?php
    include("../regexps.php");
    include("../utils.php");
  //  if(count($_POST)>0){
  //      if(!isset($_POST["empleado"]["gender"]) || !test($GENDER, $_POST["empleado"]["gender"])){
  //          $_POST["empleado"]["gender"] = null;
  //      }
  //  }
echo "ENTRO A PROYECTO SERACH";
    if(count($_POST)>0
        && (($_POST["proyecto"]["number"] == null) || test($NUMBER, $_POST["proyecto"]["number"]))
        && (($_POST["proyecto"]["name"] == null) || test($NAME, $_POST["proyecto"]["name"]))
        && (($_POST["proyecto"]["descripcion"] == null) || test($NAME, $_POST["proyecto"]["descripcion"]))
    ){
        $nulls = 0;
        foreach($_POST["proyecto"] as $key => $value){
            if($value != null)
                $info[$key] = htmlspecialchars($value);
            else{
                $info[$key] = "";
                if($key!="number")
                    $nulls++;
            }
        }
        if($nulls != 3 || $info["number"] != "" && isset($info)) {
          echo "<h1 class="."text-center".">PROYECTOS</h1>";
            echo "<table class='table table-hover'>";
            echo buildTableData(queryProyecto(
                                    $info["number"],
                                    $info["name"],
                                    $info["descripcion"]
                                  ), false);
            echo "</table>";

            }

        }

    ?>
