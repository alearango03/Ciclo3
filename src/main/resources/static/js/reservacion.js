//*Reservation*//

function traerInformacion6(){
    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta6){
            pintarRespuesta6(respuesta6);
        },
        error: function (respuesta6, xhr){
            alert("Error de peticion!");
        }
    });
}

function pintarRespuesta6(items){

    let myTable="<table>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<th>idReservation</th>"
    myTable += "<th>startDate</th>"
    myTable += "<th>devolutionDate</th>"
    myTable += "<th>status</th>"
    myTable += "</tr>"
    myTable += "</thead>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idReservation+"</td>";
        myTable+="<td>"+items[i].startDate+"</td>";
        myTable+="<td>"+items[i].devolutionDate+"</td>";
        myTable+="<td>"+items[i].status+"</td>";
        myTable+="<td> <button onclick='borrarElemento6("+items[i].idReservation+")'>ELIMINAR</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado6").empty();
    $("#resultado6").append(myTable);
}

function guardarInformacion6(){
    let myData={
        idReservation:$("#idReservation").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Reservation/save",
        type:"POST",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta6){
            $("#resultado6").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            traerInformacion6();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacion6(){
    let myData={
        idReservation:$("#idReservation").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData)
    $.ajax({
        url:"http://localhost:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta6){
            $("#resultado6").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            traerInformacion6();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento6(idElemento){
    let myData={
        id:idElemento,
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta6){
            $("#resultado6").empty();
            traerInformacion6();
            alert("se ha eliminado")
        }
    });
}