<?php
echo "ENTRO A GETUSER";
$q = intval($_GET['q']);

$con = mysqli_connect("localhost","root","","jambe");
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}else{
  //  mysqli_select_db($con,"ajax_demo");
    $sql="SELECT * FROM gradoestudios WHERE idGrado = '".$q."'";


    $result = mysqli_query($con,$sql);
    $row = mysqli_fetch_array($result);

    if(count($_POST)>0
    && (($_POST["stat"]["user_grade"] == null) || test($NUMBER, $_POST["stat"]["user_grade"]))
    && (($_POST["stat"]["age"] == null) || test($NAME, $_POST["stat"]["age"]))
    && (($_POST["stat"]["sex"] == null) || test($NAME, $_POST["stat"]["sex"]))
    && (($_POST["stat"]["suburb"] == null) || test($NAME, $_POST["stat"]["suburb"]))
    && (($_POST["stat"]["month"] == null) || test($DATE, $_POST["stat"]["month"]))
    && (($_POST["stat"]["year"] == null) || test($GENDER, $_POST["stat"]["year"]))
    && (isset($_POST["actionTypeEntry"])) && (($_POST["actionTypeEntry"] == "Registrar Entrada"))

){
    $nulls = 0;
    foreach($_POST["stat"] as $key => $value){
              if($value != null)
                  $info[$key] = htmlspecialchars($value);
              else{
                  $info[$key] = "";
                  if($key!="number")
                      $nulls++;
              }
      }
    if ($_POST["actionTypeEntry"]) {
      echo "<br><br><br>";
                    echo "<div class='row'><div class='col-12'><table class='table table-hover'>";
                    echo buildTableData(queryVisitor(
                                            $info["user_grade"],
                                            $info["age"],
                                            $info["sex"],
                                            $info["suburb"],
                                            $info["month"],
                                            $info["year"],
                                            $con
                                            ));
                    echo "</table></div></div>";
                    echo '$row["nombre"]'.$row["nombre"];
    }

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
    echo "</table>";
  */

    mysqli_close($con);
}
}

function buildTableData($result){
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
            $table .= "</tr>";
        }
        $table .= "</tbody>";
    }else{
        echo "<thead><td>No hay resultados</td></thead>";
    }
    return $table;
}


function queryVisitor($idGrado, $age, $sex, $suburb, $month, $year, $con){
    $statement = mysqli_prepare($con,"
    select ge.idGrado, ge.nombre, v.nombre, v.apellidoPaterno, v.apellidoMaterno, v.genero
    from gradoestudios ge, visitante v
    where (ge.idGrado = ? ".($idGrado==""?"or 1":"").")
    ");
    $statement->bind_param("i", $idGrado);
    $statement->execute();
    $result = $statement->get_result();
  //  disconnect($connection);
    return $result;
}
