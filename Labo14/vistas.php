 <?php include("partials/_header.html"); ?>
<?php include("partials/_footer.html"); ?>

<?php
  require_once "util.php";

  $result = getFruits();

  if ( mysqli_num_rows($result) > 0) {
    //Imprimo la info
    echo ' <br> <br> <br>
    <h1>Table Fruits</h1>
    <table border="1" cellspacing=“4” cellpadding=“2” width="300px">
      <tr>
        <th>Name</th>
        <th>Units</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Country</th>
      </tr>';
    while ($row = mysqli_fetch_assoc($result)) {
      echo '
        <tr border="1" cellspacing=“4” cellpadding=“2” width="300px">
          <td>'. $row["name"].'</td>
          <td>'. $row["units"].'</td>
          <td>'. $row["quantity"].'</td>
          <td>'. $row["price"].'</td>
          <td>'. $row["country"].'</td>
        </tr>';
    }
  }
 ?>
