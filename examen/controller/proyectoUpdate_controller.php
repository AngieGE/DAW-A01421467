<?php //Para editar proyectos
    include("../regexps.php");
    include("../utils.php");

    foreach($_POST["proyecto"] as $key => $value){
        echo $key." : ".$value."\n";
    }

    echo count($_POST["proyecto"]);
  //  if(count($_POST)>0){
  //      if(!isset($_POST["empleado"]["gender"]) || !test($GENDER, $_POST["empleado"]["gender"])){
  //          $_POST["empleado"]["gender"] = null;
  //      }
  //  }

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
        if(isset($info)) {
            if($nulls == 0){
                updateProyecto(
                    $info["number"],
                    $info["name"],
                    $info["descripcion"]
                  );
            }
        }
    }
    header("Location: ../proyecto.php");
