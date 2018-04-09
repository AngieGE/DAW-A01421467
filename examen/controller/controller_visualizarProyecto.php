
<?php
    include("utils.php");
    echo "<h1 class="."text-center".">Todas las entradas</h1>";
     obtenerCantidad();
    echo "<table class='table table-hover'>";
    echo buildTableData(getTable('entrada'));
    echo "</table>";

    //queryEmpleadosAsignados  (true para success)
    echo "<h1 class="."text-center".">Entradas SUCCESS</h1>";
    echo "<table class='table table-hover'>";
    echo buildTableAsignacion(queryEmpleadosAsignados(true));
    echo "</table>";
    //queryEmpleadosAsignados  (false para system failure)
    echo "<h1 class="."text-center".">Entradas SYSTEM FAILURE</h1>";

    echo "<table class='table table-hover'>";
    echo buildTableAsignacion(queryEmpleadosAsignados(false));
    echo "</table>";
?>