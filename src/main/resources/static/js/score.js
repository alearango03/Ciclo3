//*Admin*//

function traerInformacion7(){
    $.ajax({
        url: "http://localhost:8080/api/Score/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta7){
            pintarRespuesta7(respuesta7);
        },
        error: function (respuesta7, xhr){
            alert("Error de peticion!");
        }
    });
}

function pintarRespuesta7(items){

    let myTable="<table>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<th>idScore</th>"
    myTable += "<th>messageText</th>"
    myTable += "<th>stars</th>"
    myTable += "</tr>"
    myTable += "</thead>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idScore+"</td>";
        myTable+="<td>"+items[i].messageText+"</td>";
        myTable+="<td>"+items[i].stars+"</td>";
        myTable+="<td> <button onclick='borrarElemento7("+items[i].idScore+")'>ELIMINAR</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado7").empty();
    $("#resultado7").append(myTable);
}

function guardarInformacion7(){
    let myData={
        idScore:$("#idScore").val(),
        messageText:$("#messageText").val(),
        stars:$("#stars").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Score/save",
        type:"POST",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta7){
            $("#resultado7").empty();
            $("#idScore").val("");
            $("#messageText").val("");
            $("#stars").val("");
            traerInformacion7();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacion7(){
    let myData={
        idScore:$("#idScore").val(),
        messageText:$("#messageText").val(),
        stars:$("#stars").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData)
    $.ajax({
        url:"http://localhost:8080/api/Score/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta7){
            $("#resultado7").empty();
            $("#idScore").val("");
            $("#messageText").val("");
            $("#stars").val("");
            traerInformacion7();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento7(idElemento){
    let myData={
        idScore:idElemento,
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Score/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta7){
            $("#resultado7").empty();
            traerInformacion7();
            alert("se ha eliminado")
        }
    });
}