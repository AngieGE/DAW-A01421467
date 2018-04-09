<?php

///////////////////////////     BD      ////////////////////////////////////////
function connect() {
    $ENV = "dev";
    if ($ENV == "dev") {
        $mysql = mysqli_connect("localhost","root","","examen");
                                        //root si estan en windows
    }
    $mysql->set_charset("utf8");
    return $mysql;
}

function disconnect($mysql) {
    mysqli_close($mysql);
}
///////////////////////////     NO SE USA      ////////////////////////////////////////

///////////////////////////     EMPLEADO      ////////////////////////////////////////


///////////////////////////     PROYECTO      ////////////////////////////////////////

// SI LA USO
function insertProyecto($input, $estado){
    //$result = queryFirstProyecto($nombre,$descripcion);
    $connection = connect();
    /*if($result){
        echo "<p>Ya existe un proyecto con ese nombre!</p>";
        return;}*/
    $statement = mysqli_prepare($connection,"
    insert into entrada (valor, tipo)
    values (?, ?);
    ");
    $statement->bind_param("ss", $input, $estado);
    $statement->execute();

    disconnect($connection);
}
//SI LA USO //
function deleteProyecto($idProyecto, $hora){
    $connection = connect();
    $statement = mysqli_prepare($connection,"
    DELETE FROM entrada
    where valor = (?)
    and hora =  (?)
    ");
    $statement->bind_param("ss", $idProyecto, $hora);
    $statement->execute();
    disconnect($connection);
}


///////////////////////////     PROYECTO_EMPLEADO      ////////////////////////////////////////

function queryEmpleadosAsignados( $success){
    $connection = connect();
    if($success == true){
        $statement = mysqli_prepare($connection,"
        
        select * 
        from entrada e
        where tipo = 'SUCCESS'
        ORDER BY TIME(hora), hora
        ");
    }else{
        $statement = mysqli_prepare($connection,"
        select * 
        from entrada e
        where tipo = 'SYSTEM FAILURE'
        ORDER BY TIME(hora), hora
        ");
    }
    //$statement->bind_param("i", $idProyecto);
    $statement->execute();
    $result = $statement->get_result();
    disconnect($connection);
    return $result;
}


///////////////////////////     TABLES      ////////////////////////////////////////

// SI LA USO//
function getTable($tableName) {
    $db = connect();
    if ($db != NULL) {
$hora = '(hora)';
        //Specification of the SQL query
        $query="SELECT * 
                FROM  . $tableName";
        $query;
         // Query execution; returns identifier of the result group
        $results = $db->query($query);
         // cycle to explode every line of the results
        disconnect($db);
        return $results;
    }
    return false;
}



// SI LA USO//
function buildTableData($result){ //, $empleado){ //Booleano para ver si agarro idEmpleado o idProyecto
    $contador = 0;
    $table = "";
    if(mysqli_num_rows($result)>0){
        $fieldNumber = mysqli_num_fields($result);
        $table .= "<thead>";
        for($i = 0; $i < $fieldNumber; $i++){
              $table .= "<td><strong>  ".mysqli_fetch_field_direct($result, $i)->name." </strong> </td>";
        }
        $table .= "</thead><tbody>";
        while($row = mysqli_fetch_assoc($result)){
            $table .= "<tr>";
            foreach($row as $data){
                $table .= "<td>$data</td>";
            }/*
            if ($empleado == true) {
              $id = $row["idEmpleado"];
              $table .= "<td><a id=".$id." name=".$id." type=".'button'." class="."btn monBouton"." href=".'controller/deleteEmpleado.php?idEmpleado='.$id.">Eliminar</a></td>";
            }else{*/
              $valor = $row["valor"];
              $hora = $row["hora"];
              $table .= "<td><a id=".$valor." name=".$valor." type=".'button'." class="."btn monBouton"." 
              href=".'controller/deleteProyecto.php?valor='.$valor.'&hora='.$hora.">Eliminar</a></td>";
            
            $table .= "</tr>";
            $contador += 1;
        }
        $table .= "</tbody>";
    }else{
        echo "<thead><td>No hay resultados</td></thead>";
    }
    return $table;
}
//SI LA USO
function buildTableAsignacion($result){ //,$empleado){ //Booleano para ver si agarro idEmpleado o idProyecto
    $contador = 0;
    $table = "";
    if(mysqli_num_rows($result)>0){
        $fieldNumber = mysqli_num_fields($result);
        $table .= "<thead>";
        for($i = 0; $i < $fieldNumber; $i++){
              $table .= "<td><strong>  ".mysqli_fetch_field_direct($result, $i)->name." </strong> </td>";
        }
        $table .= "</thead><tbody>";
        while($row = mysqli_fetch_assoc($result)){
            $table .= "<tr>";
            $contador += 1;
            foreach($row as $data){
                $table .= "<td>$data</td>";
                
            }/*
            if ($empleado == true) {
                //Lo manda a 
                $id = $row["idEmpleado"];
                $table .= "<td><a id=".$id." name=".$id." type=".'button'." class="."btn monBouton"." href=".'controller/controller_asignarEmpleado_Proyecto.php?idEmpleado='.$id.">Asignar Empleado a Proyecto</a></td>";
                $table .= "</tr>";
              }else{
                  //Lo manda a asignarEmpleados.php y manda el id del proyecto.
                $id = $row["idProyecto"];
                $table .= "<td><a id=".$id." name=".$id." type=".'button'." class="."btn monBouton"." href=".'asignarEmpleados.php?idProyecto='.$id.">Asignar Empleados</a></td>";
                $table .= "</tr>";
              }*/
            
        }
        $table .= "</tbody>";
    }else{
        if($empleado == true){
            echo "<thead><td>No hay empleados registrados, favor de registrar en la ventana de Empleados</td></thead>";
        }else{
            echo "<thead><td>No hay proyectos registrados, favor de registrar en la ventana de Proyectos</td></thead>";
        }
        
    }
    imprimir($contador);
    return $table;
}
//SI LA USO //
function imprimir($num){
    echo "<h4 class="."text-center".">Cantidad: $num</h4>";
}

function buildTableAsignacionProyecto($result,$idProyecto,$empleado){ //Booleano para ver si agarro idEmpleado o idProyecto
    $contador = 0;
    $table = "";
    if(mysqli_num_rows($result)>0){
        $fieldNumber = mysqli_num_fields($result);
        $table .= "<thead>";
        for($i = 0; $i < $fieldNumber; $i++){
              $table .= "<td><strong>  ".mysqli_fetch_field_direct($result, $i)->name." </strong> </td>";
        }
        $table .= "</thead><tbody>";
        while($row = mysqli_fetch_assoc($result)){
            $table .= "<tr>";
            foreach($row as $data){
                $table .= "<td>$data</td>";
            }
            $id = $row["idEmpleado"];
            if ($empleado == true) {
                $table .= "<td><a id=".$id." name=".$id." type=".'button'." class="."btn monBouton"." href=".'controller/controller_desasignarEmpleado_Proyecto.php?idEmpleado='.$id.'&idProyecto='.$idProyecto.">Desasignar Empleado</a></td>";
                $table .= "</tr>";
              }else{
                $table .= "<td><a id=".$id." name=".$id." type=".'button'." class="."btn monBouton"." href=".'controller/controller_asignarEmpleado_Proyecto.php?idEmpleado='.$id.'&idProyecto='.$idProyecto.">Asignar Empleado</a></td>";
                $table .= "</tr>";
              }
            
            $contador += 1;
        }
        $table .= "</tbody>";
    }else{
        if($empleado == true){
            echo "<thead><td>No hay empleados registrados, favor de registrar en la ventana de Empleados</td></thead>";
        }else{
            echo "<thead><td>No hay empleados registrados, favor de registrar en la ventana de Empleados</td></thead>";
        }
        
    }
    return $table;
}
//SI LA USO
function obtenerCantidad(){
    $db = connect();
    if($db != NULL){
            $query='SELECT *
              FROM entrada';
        
        if(!($stmt = $db->prepare($query))) {
            die("Preparation failed: (" . $db->errno . ") " . $db->error);
        }

        if (!$stmt->execute()) {
            die("Execution failed: (" . $statement->errno . ") " . $statement->error);
        }
        $result = $stmt->get_result();
        $cantidad = 0;
        if($result->num_rows === 0) exit('No hay resultados');
        while($row = $result->fetch_assoc()) {
            $cantidad = $cantidad +1;
        }
        echo "<h4 class="."text-center".">Cantidad: $cantidad</h4>";
        disconnect($db);
        return $cantidad;
    }
  }

?>
