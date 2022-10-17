//*Mensaje*//

function traerInformacion1(){
    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta1){
            pintarRespuesta1(respuesta1);
        },
        error: function (respuesta1, xhr){
            alert("Error de peticion!");
        }
    });
}

function pintarRespuesta1(items){

    let myTable="<table>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<th>idMessage</th>"
    myTable += "<th>messageText</th>"
    myTable += "</tr>"
    myTable += "</thead>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idMessage+"</td>";
        myTable+="<td>"+items[i].messageText+"</td>";
        myTable+="<td> <button onclick='borrarElemento1("+items[i].idMessage+")'>ELIMINAR</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").empty();
    $("#resultado1").append(myTable);
}

function guardarInformacion1(){
    let myData={
        idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Message/save",
        type:"POST",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta1){
            $("#resultado1").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacion1();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacion1(){
    let myData={
        idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData)
    $.ajax({
        url:"http://localhost:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta1){
            $("#resultado1").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacion1();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento1(idElemento){
    let myData={
        idMessage:idElemento,
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta1){
            $("#resultado1").empty();
            traerInformacion1();
            alert("se ha eliminado")
        }
    });
}