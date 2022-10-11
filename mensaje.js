

function leerMensajes(){
    $.ajax({
        url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        
        type: "GET",
        dataType:"JSON",

        success : function(mensajes) {
            let cs=mensajes.items;
            $("#listaMensajes").empty();
            for(i=0; i<cs.length;i++){
                $("#listaMensajes").append(cs[i].id+" <b> "+cs[i].messagetext+"</b> ");
                $("#listaMensajes").append("<button onclick='borrarMensajes("+cs[i].id+")'>Borrar</button>"+"<br>");
            }            
        },
        error : function(xhr, status) {
        alert('ha sucedido un problema');
        }
       
        });

}


function guardarMensajes(){
    let idCliente=$("#idCliente").val();
    let Mensaje=$("#Mensaje").val();
    

    let data={
        id:idCliente,
        messagetext:Mensaje
    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        
        type: "POST",
        //dataType:"JSON",
        data:dataToSend,
        contentType:'application/json',
        success : function(traer) {
            $("#idCliente").val("");
            $("#Mensaje").val("");
           //console.log(traer);
                        
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },

        complete: function(){
            leerMensajes();
        }

        });

}

        function editarMensajes(){
            let idCliente=$("#idCliente").val();
            let Mensaje=$("#Mensaje").val();
    

             let data={
                id:idCliente,
                messagetext:Mensaje
        };
        
            let dataToSend=JSON.stringify(data);
            //console.log(dataToSend);
        
            $.ajax({
                url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
                
                type: "PUT",
                //dataType:"JSON",
                data:dataToSend,
                contentType:'application/json',
                success : function(traer) {
                    $("#idCliente").val("");
                    $("#nombreClienteMensaje").val("");
                    //console.log(traer);
                                
                },
                error : function(xhr, status) {
                //alert('ha sucedido un problema');
                },
                complete: function(){
                    leerMensajes();
                }
               
                });
        
        
}

function borrarMensajes(idCliente){
   
    let data={
        id:idCliente,
      
    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        
        type: "DELETE",
        //dataType:"JSON",
        data:dataToSend,
        contentType:'application/json',
        success : function(traer) {
            $("#idCliente").val("");
            $("#Mensaje").val("");
            //console.log(traer);
                        
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            leerMensajes();
        }
       
        });


}


