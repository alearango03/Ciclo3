//*Principal*//

function traerInformacion0(){
    $.ajax({
        url: "http://localhost:8080/api/Audience/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta0){
            pintarRespuesta0(respuesta0);
        },
        error: function (respuesta0, xhr){
            alert("Error de peticion!");
        }
    });
}

function pintarRespuesta0(items){

    let myTable="<table>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<th>id</th>"
    myTable += "<th>name</th>"
    myTable += "<th>owner</th>"
    myTable += "<th>capacity</th>"
    myTable += "<th>description</th>"
    myTable += "</tr>"
    myTable += "</thead>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].owner+"</td>";
        myTable+="<td>"+items[i].capacity+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElemento0("+items[i].id+")'>ELIMINAR</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado0").empty();
    $("#resultado0").append(myTable);
}

function guardarInformacion0(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        description:$("#description").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Audience/save",
        type:"POST",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta0){
            $("#resultado0").empty();
            $("#id").val("");
            $("#name").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#description").val("");
            traerInformacion0();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacion0(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        description:$("#description").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData)
    $.ajax({
        url:"http://localhost:8080/api/Audience/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta0){
            $("#resultado0").empty();
            $("#id").val("");
            $("#name").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#description").val("");
            traerInformacion0();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento0(idElemento){
    let myData={
        id:idElemento,
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Audience/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta0){
            $("#resultado0").empty();
            traerInformacion0();
            alert("se ha eliminado")
        }
    });
}