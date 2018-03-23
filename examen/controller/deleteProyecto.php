<?php
    include("../utils.php");
    echo "ENTRO A ELIMINAR";
    if(isset($_GET["idProyecto"])){
        $valor = $_GET["valor"];
        $hora = $_GET["hora"];
        echo $valor;
        echo $hora;
        deleteProyecto($valor, $hora);
    }
    header("Location: ../visualizarProyecto.php");
?>