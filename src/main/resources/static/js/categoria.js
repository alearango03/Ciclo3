//*categoria*//

function traerInformacion4(){
    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta4){
            pintarRespuesta4(respuesta4);
        },
        error: function (respuesta4, xhr){
            alert("Error de peticion!");
        }
    });
}

function pintarRespuesta4(items){

    let myTable="<table>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<th>id</th>"
    myTable += "<th>name</th>"
    myTable += "<th>description</th>"
    myTable += "</tr>"
    myTable += "</thead>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElemento4("+items[i].id+")'>ELIMINAR</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").empty();
    $("#resultado4").append(myTable);
}

function guardarInformacion4(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        description:$("#description").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Category/save",
        type:"POST",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta4){
            $("#resultado4").empty();
            $("#id").val("");
            $("#name").val("");
            $("#description").val("");
            traerInformacion4();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacion4(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        description:$("#description").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData)
    $.ajax({
        url:"http://localhost:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta4){
            $("#resultado4").empty();
            $("#id").val("");
            $("#name").val("");
            $("#description").val("");
            traerInformacion4();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento4(idElemento){
    let myData={
        id:idElemento,
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta4){
            $("#resultado4").empty();
            traerInformacion4();
            alert("se ha eliminado")
        }
    });
}