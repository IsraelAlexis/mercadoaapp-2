let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method:"GET",
    headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recogiendo la respuesta para hacer render
    let fila=document.getElementById("fila")
    respuesta.forEach(function(usuario){
        //console.log(producto) probando
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")
        let imagen=document.createElement("h4")
        imagen.classList.add("text-center")
        imagen.src=usuario.nombres
        

        let nombreUsuario=document.createElement("h4")
        nombreUsuario.classList.add("text-center")
        nombreUsuario.textContent=usuario.nombres

        let correo=document.createElement("h4")
        correo.classList.add("text-center")
        correo.textContent=usuario.correo

        

        

      
        tarjeta.appendChild(nombreUsuario)
        tarjeta.appendChild(correo)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
})
.catch(function(respuesta){
    console.log(respuesta)
})