<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="JAMBE">

        <title>JAMBE</title>
        <!--    Bootstrap 4    -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
        <!--    Custom CSS
        <link rel="stylesheet" href="css/custom.css">-->
        <!--    Material Icons    -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    </head>

    <body>
<br><br>
<div class="container shadow">
  <!--Titulo de estadísticas-->
  <div class="container">
    <div class="row text-center">
        <div class="col col-sm-12 col-md-6 mx-auto">
          <br>
            <div class="display-3">Estadísticas</div>
        </div>
    </div>
  </div>
  <!--Formulario-->
    <form class="" method="POST" action="index.html">
    <div class="row">
      <!--Grado estudios-->
      <div class='col-sm-4'>
          <div class='form-group'>
            <label class="mr-3 col-lg-5" for="credential_schooling">Escolaridad:</label>
            <div class="col-md-12">
            <select name="stat[user_grade]" class="form-control cvalidate cschooling" id="userInput" onChange="showUser(this.value)">
                  <option value="" disabled selected>-- Escolaridad --</option>
                  <option value="1">Ninguno</option>
                  <option value="2">Preescolar</option>
                  <option value="3">Primaria</option>
                  <option value="4">Secundaria</option>
                  <option value="5">Preparatoria</option>
                  <option value="6">Universidad</option>
                  <option value="7">Maestría</option>
                  <option value="8">Doctorado</option>
                  <option value="9">Postdoctorado</option>
                </select>
              </div>
          </div>
      </div>
      <!--EDAD-->
      <div class='col-sm-4'>
          <div class='form-group'>
              <label for="user_ocupation">Edad:</label>
              <div class="col-md-12">
                  <input  class="form-control cvalidate cnumber" id="userInput" name="stat[age]" type="number" min="1" max="120" onChange="showUser(this.value)"/>
              </div>
          </div>
      </div>
      <!--SEXO-->
      <div class='col-sm-4'>
          <div class='form-group'>
              <label for="user_ocupation">Sexo:</label>
              <div class="col-md-12">
                <select  class="form-control cvalidate cgender" name="stat[sex]">
                    <option value="" disabled selected>-- Sexo --</option>
                    <option value="H">Hombre</option>
                    <option value="M">Mujer</option>
                    <option value="O">Otro</option>
                </select>
              </div>
          </div>
      </div>
    </div>
    <!--COLONIA-->
    <div class="row">
      <div class='col-sm-4'>
          <div class='form-group'>
              <label for="user_ocupation">Colonia:</label>
              <div class="col-md-12">
                  <input class="form-control cvalidate cname" id="user_ocupation" name="stat[suburb]"  size="30" type="text" />
              </div>
          </div>
      </div>
      <!--MES-->
      <div class='col-sm-4'>
          <div class='form-group'>
              <label for="user_ocupation">Mes:</label>
              <div class="col-md-12">
                <select class="form-control cvalidate cnumber" name="stat[month]">
                    <option value="" disabled selected>-- Mes --</option>
                    <option value="01">Enero</option>
                    <option value="02">Febrero</option>
                    <option value="03">Marzo</option>
                    <option value="04">Abril</option>
                    <option value="05">Mayo</option>
                    <option value="06">Junio</option>
                    <option value="07">Julio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                </select>
              </div>
          </div>
      </div>
      <!--AÑO-->
      <div class='col-sm-4'>
          <div class='form-group'>
              <label for="user_ocupation">Año:</label>
              <div class="col-md-12">
                <select class="form-control cvalidate cyear" name="stat[year]">
                    <option value="" disabled selected>-- Año --</option>
                    <?php
                    $firstYear = 2018;
                    for($year = $firstYear; $year <= date("Y"); $year++) {
                        echo "<option value='$year'> $year </option>";
                    }
                    ?>
                </select>
              </div>
          </div>
      </div>
    </div>
    <!--Columna con tabla y grafica-->
    <div class="row">
      <div class="col-sm-12 col-md-7"> <br>
        <div class="shadow">
          <div class="table-responsive" id="stats-table">
            <div id="txtHint"><b>Person info will be listed here.</b></div>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <!--Boton Filtrar-->
    <div class="row">
      <br><br>
      <div class="col-sm-4">
        <a class="btn btn-secondary py-0" href=""><i class="material-icons align-middle">arrow_back</i></a>
      </div>
      <div class='col-sm-4'>
          <div class='form-group'>
              <div class="text-center">
                <!--  <input type="submit" name="actionTypeEntry" id="mostrarEstadisticas" class="btn btn-secondary mx-auto csearch" value="Mostrar Estadísticas" oncklick="showUser()">  -->
              </div>
          </div>
      </div>
      <div class="col-sm-4"></div>
      <br>
    </div>
    </form>
  </div>
  <br><br>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
  <script type="text/javascript" src="ajax2.js"></script>
</body>
</html>
