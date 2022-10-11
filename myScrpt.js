

function leerClientes(){
    $.ajax({
        url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        
        type: "GET",
        dataType:"JSON",

        success : function(clientes) {
            let cs=clientes.items;
            $("#listaClientes").empty();
            for(i=0; i<cs.length;i++){
                $("#listaClientes").append(cs[i].id+" <b> "+cs[i].name+"</b> "+cs[i].email+"  "+cs[i].age+" "+" ");
                $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button>"+"<br>");
            }

            
        },
        error : function(xhr, status) {
        alert('ha sucedido un problema');
        }
       
        });

}


function guardarCliente(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mailCliente=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        
        type: "POST",
        //dataType:"JSON",
        data:dataToSend,
        contentType:'application/json',
        success : function(traer) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
            //console.log(traer);
                        
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },

        complete: function(){
            leerClientes();
        }

        });

}

        function editarCliente(){
            let idCliente=$("#idCliente").val();
            let nombre=$("#nombreCliente").val();
            let mailCliente=$("#mailCliente").val();
            let edad=$("#edadCliente").val();
        
            let data={
                id:idCliente,
                name:nombre,
                email:mailCliente,
                age:edad
            };
        
            let dataToSend=JSON.stringify(data);
            //console.log(dataToSend);
        
            $.ajax({
                url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
                
                type: "PUT",
                //dataType:"JSON",
                data:dataToSend,
                contentType:'application/json',
                success : function(traer) {
                    $("#idCliente").val("");
                    $("#nombreCliente").val("");
                    $("#mailCliente").val("");
                    $("#edadCliente").val("");
                    //console.log(traer);
                                
                },
                error : function(xhr, status) {
                //alert('ha sucedido un problema');
                },
                complete: function(){
                    leerClientes();
                }
               
                });
        
        
}

function borrarCliente(idCliente){
   
    let data={
        id:idCliente,
      
    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://ga540bbf63a1373-azxqppfy8xrd5tsx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        
        type: "DELETE",
        //dataType:"JSON",
        data:dataToSend,
        contentType:'application/json',
        success : function(traer) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
            //console.log(traer);
                        
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
       
        });


}


