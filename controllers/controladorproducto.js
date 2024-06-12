//consumiendo el api para acceder a los datos de la base de datos

let url="localhost:8080/storeapi/v1/producto"

let peticion_{
    method:"GET",
    headers:{}
}

fetch(url,peticion)
.then(funtion(respuesta){
    return respuesta.json()
})
.then(funtion(respuesta){
    console.log(respuesta)
})
.catch(funtion(respuesta){
    console.log(respuesta)
})