

function leerHerra(){
    $.ajax({
        url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/tool/tool",
        
        type: "GET",
        dataType:"JSON",

        success : function(herramientas) {
            let cs=herramientas.items;
            $("#listaHerramientas").empty();
            for(i=0; i<cs.length;i++){
                $("#listaHerramientas").append(cs[i].id+" <b> "+cs[i].brand+"</b> "+cs[i].model+"  "+cs[i].category_id+" "+cs[i].name+" ");
                $("#listaHerramientas").append("<button onclick='borrarHerramienta("+cs[i].id+")'>Borrar</button>"+"<br>");
            }

            
        },
        error : function(xhr, status) {
        alert('ha sucedido un problema');
        }
       
        });

}


function guardarHerra(){
    let idHerramienta=$("#idHerramienta").val();
    let brand=$("#brand").val();
    let model=$("#model").val();
    let category_id=$("#category_id").val();
    let nameHerramienta=$("#nameHerramienta").val();


    let data={
        id:idHerramienta,
        brand:brand,
        model:model,
        category_id:category_id,
        name:nameHerramienta

    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/tool/tool",
        
        type: "POST",
        //dataType:"JSON",
        data:dataToSend,
        contentType:'application/json',
        success : function(traer) {
            $("#idHerramienta").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#nameHerramienta").val("");
            //console.log(traer);
                        
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },

        complete: function(){
            leerHerra();
        }

        });

}

function editarHerra(){
    let idHerramienta=$("#idHerramienta").val();
    let brand=$("#brand").val();
    let model=$("#model").val();
    let category_id=$("#category_id").val();
    let nameHerramienta=$("#nameHerramienta").val();


    let data={
        id:idHerramienta,
        brand:brand,
        model:model,
        category_id:category_id,
        name:nameHerramienta

    };
        
    let dataToSend=JSON.stringify(data);
     //console.log(dataToSend);
        
            $.ajax({
                url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/tool/tool",
                
                type: "PUT",
                //dataType:"JSON",
                data:dataToSend,
                contentType:'application/json',
                success : function(traer) {
                    $("#idHerramienta").val("");
                    $("#brand").val("");
                    $("#model").val("");
                    $("#category_id").val("");
                    $("#nameHerramienta").val("");
                    //console.log(traer);
                                
                },
                error : function(xhr, status) {
                //alert('ha sucedido un problema');
                },
                complete: function(){
                    leerHerra();
                }
               
                });
        
        
}

function borrarHerramienta(idCliente){
   
    let data={
        id:idCliente,
      
    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/tool/tool",
        
        type: "DELETE",
        //dataType:"JSON",
        data:dataToSend,
        contentType:'application/json',
        success : function(traer) {
            $("#idHerramienta").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#nameHerramienta").val("");
            //console.log(traer);
                        
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            leerHerra();
        }
       
        });


}


