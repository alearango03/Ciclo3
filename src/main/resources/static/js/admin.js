//*Admin*//

function traerInformacion5(){
    $.ajax({
        url: "http://localhost:8080/api/Admin/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta5){
            pintarRespuesta5(respuesta5);
        },
        error: function (respuesta5, xhr){
            alert("Error de peticion!");
        }
    });
}

function pintarRespuesta5(items){

    let myTable="<table>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<th>idAdmin</th>"
    myTable += "<th>email</th>"
    myTable += "<th>name</th>"
    myTable += "</tr>"
    myTable += "</thead>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idAdmin+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento5("+items[i].id+")'>ELIMINAR</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").empty();
    $("#resultado5").append(myTable);
}

function guardarInformacion5(){
    let myData={
        idAdmin:$("#idAdmin").val(),
        email:$("#email").val(),
        name:$("#name").val(),
        password:$("#password").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Admin/save",
        type:"POST",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta5){
            $("#resultado5").empty();
            $("#idAdmin").val("");
            $("#email").val("");
            $("#name").val("");
            $("#password").val("");
            traerInformacion5();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacion5(){
    let myData={
        idAdmin:$("#idAdmin").val(),
        email:$("#email").val(),
        name:$("#name").val(),
        password:$("#password").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData)
    $.ajax({
        url:"http://localhost:8080/api/Admin/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta5){
            $("#resultado5").empty();
            $("#idAdmin").val("");
            $("#email").val("");
            $("#name").val("");
            $("#password").val("");
            traerInformacion5();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento5(idElemento){
    let myData={
        idAdmin:idElemento,
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Admin/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta5){
            $("#resultado5").empty();
            traerInformacion5();
            alert("se ha eliminado")
        }
    });
}