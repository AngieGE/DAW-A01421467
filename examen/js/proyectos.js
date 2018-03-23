$(document).ready(function(){
    $.viewMode = function() {
        //hace disable todos los inputs y selectors
        $("input").each(function(){
            $(this).prop("disabled", true);
        });
        $("select").each(function(){
            $(this).prop("disabled", true);
        });

        $("#warpEditButton").html(

          $("<button>", {
            class: "btn btn-secondary",
            text: "Editar",
            click: function(e){
                e.preventDefault();
                $(this).text("Guardar cambios");

                $("input").each(function(){
                    $(this).prop("disabled", false);
                });

                $("#proyecto_number").prop("disabled", true);

                $("select").each(function(){
                    $(this).prop("disabled", false);
                });

  

                $("#proyecto_table").hide();

                $(this).click(function(){
                    $("#proyecto_number").prop("disabled", false);
                    $("#proyecto_form").attr("action", "controller/proyectoUpdate_controller.php");
                    $("#proyecto_form").submit();
                });
            }
        }));




    }
});
