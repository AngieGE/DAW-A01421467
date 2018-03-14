
<?php
$q = intval($_GET['q']);

$con = mysqli_connect("localhost","root","","jambe");
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}else{
//  mysqli_select_db($con,"ajax_demo");
//$sql="SELECT * FROM gradoestudios WHERE idGrado = 3"; 
$sql="SELECT * FROM gradoestudios WHERE idGrado = '".$q."'";
  
$result = mysqli_query($con,$sql);

$row = mysqli_fetch_array($result);
echo $q;

echo "<br><br>l<br>";
                echo "<div class='row'><div class='col-12'><table class='table table-hover'>";
                echo buildTableData(queryVisitor($q,$con));
                echo "</table></div></div>";

/*
  echo "<table>
  <tr>
  <th>idGrado</th>
  <th>Nombre</th>
  </tr>";
  while($row = mysqli_fetch_array($result)) {
      echo "<tr>";
      echo "<td>" . $row['idGrado'] . "</td>";
      echo "<td>" . $row['nombre'] . "</td>";
      echo "</tr>";
  }
  echo "</table>";*/

  
  mysqli_close($con);
}

function buildTableData($result){
    echo "Table";
    $table = "";
    if(mysqli_num_rows($result)>0){
        $fieldNumber = mysqli_num_fields($result);
        $table .= "<thead>";
        for($i = 0; $i < $fieldNumber; $i++){
            $table .= "<td> <strong>".mysqli_fetch_field_direct($result, $i)->name."</strong></td>";
        }
        $table .= "</thead><tbody>";
        while($row = mysqli_fetch_assoc($result)){
            $table .= "<tr>";
            foreach($row as $data){
                $table .= "<td>$data</td>";
            }
            $table .= "</tr>";
        }
        $table .= "</tbody>";
    }else{
        echo "<thead><td>No hay resultados</td></thead>";
    }
    return $table;
}
    function queryVisitor($idGrado){
        $con = mysqli_connect("localhost","root","","jambe");
        $statement = mysqli_prepare($con,"
        SELECT  g.idGrado, g.nombre as 'Grado', v.nombre, v.apellidoPaterno, v.apellidoMaterno, v.genero, 
        FROM gradoestudios g, visitante v, visitante_gradoestudios vg
        WHERE vg.idVisitante = v.idVisitante AND vg.idGrado = g.idGrado
        AND (vg.idGrado = ? ".($idGrado==""?"or 1":"").")
        ");
        echo $idGrado;
        $statement->bind_param("i", $idGrado);
        $statement->execute();
        echo $idGrado;
        $result = $statement->get_result();
        disconnect($con);
        return $result;
    }

?>