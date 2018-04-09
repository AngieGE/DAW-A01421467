$(document).ready(function(){

  //PARA INPUT
    $("input").each(function(){
        $(this).keydown(function(event){
            if(event.keyCode == 13)
                event.preventDefault();
        });
        $(this).keyup(function(){ // Todo el tiempo se ejecuta //
            $.post("controller/proyectoSearch_controller.php",{
               proyecto :
                {
                    descripcion : $("#proyecto_descripcion").val(),
                }
            },
            function(data,status){
                $("#proyecto_table").html(data);
                readyForDisplay();
            });
        });
    });

//PARA SELECTS 
/*
    $("select").each(function(){
        $(this).change(function(){
            $.post("controller/proyectoSearch_controller.php",{
                    proyecto :
                        {
                          descripcion : $("#proyecto_descripcion").val(),
                        }
                },
                function(data,status){
                    $("#proyecto_table").html(data);
                    readyForDisplay();
                });
        });
    });

    $(".creload").click(function(){
        location.reload();
    });*/

    function readyForDisplay(){
        var r = $("tbody").find("tr");
        if(r.length){
            r.each(function(){
                $(this).click(function(){
                    var c = $(this).find("td").toArray();
                    if(c.length>1){
                        var inputs = $("form").first().find("input").toArray();
                        var i;
                        for(i = 0; i<inputs.length; i++){
                            inputs[i].value = c[i].innerText;
                        }
                        //var selects = $("select").toArray();
                        //selects[0].selectedIndex = getGenero(c[5].innerText);
                        $.viewMode();
                    }
                });
            });
        }
    }

});
