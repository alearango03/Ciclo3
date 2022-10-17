//*Seccion Clientes*//

function traerInformacion8(){
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta8){
            pintarRespuesta8(respuesta8);
        },
        error: function (respuesta8, xhr){
            alert("Error de peticion!");
        }
    });
}

function pintarRespuesta8(items){

    let myTable="<table>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<th>idClient</th>"
    myTable += "<th>email</th>"
    myTable += "<th>name</th>"
    myTable += "<th>age</th>"
    myTable += "</tr>"
    myTable += "</thead>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idClient+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento8("+items[i].idClient+")'>ELIMINAR</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado8").empty();
    $("#resultado8").append(myTable);
}


function guardarInformacion8(){
    let myData={
        idClient:$("#idClient").val(),
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Client/save",
        type:"POST",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta8){
            $("#resultado8").empty();
            $("#idClient").val("");
            $("#email").val("");
            $("#password").val("");
            $("#name").val("");
            $("#age").val("");
            traerInformacion8();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacion8(){
    let myData={
        idClient:$("#idClient").val(),
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData)
    $.ajax({
        url:"http://localhost:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta8){
            $("#resultado8").empty();
            $("#idClient").val("");
            $("#email").val("");
            $("#password").val("");
            $("#name").val("");
            $("#age").val("");
            traerInformacion8();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento8(idElemento){
    let myData={
        idClient:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta8){
            $("#resultado8").empty();
            traerInformacion8();
            alert("se ha eliminado")
        }
    });
}
