function traerInformacion(){
    $.ajax({
        url:"http://144.22.247.183:8080/api/user/all", 
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}