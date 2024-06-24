/*
solicitudes http

metodos:
get
post
delte
put
**/
const listar_usuarios = async () => {
    //por defecto fetch realiza solicitud  a traves del met get
   const usuarios = await fetch("https://jsonplaceholder.typicode.com/users")
   const datos_finales = await usuarios.json()

   const lista = []
   datos_finales.forEach(element => {
    //construir lista dinamicamente
    // `` para escribir en varias lineas, y tambien se puede incertar html y js no se da cuenta
    //lo incerta en li, es nec ul en el index
    const item = `<li class="list-group-item">${element.name}</li>`
    lista.push(item)
   });
   document.getElementById("list_users").innerHTML = lista.join("")
}
//invocamos la funcion fetch sin nec. de hacer click o ...
listar_usuarios()


const crear_tabla = async () => {
  const usuarios = await fetch ("https://jsonplaceholder.typicode.com/users")
  const datos_finales = await usuarios.json()

  const filas = []
  datos_finales.forEach( (element,index) => {
    const f = `
        <tr>
            <td>${index+1}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.website}</td>
        </tr>`
        filas.push(f)
  });
  document.getElementById("tb_users").innerHTML = filas.join("")
}
crear_tabla()