// flecah son anonimas: 
const mostrar = () => {
    const respuesta = entregar_datos(5,4)
    console.log('Resultado = '+respuesta)
}

// con (...)  recibe infinidad de parametros
//d1: int,  para cuando quiero qeu si o si sea entero
const entregar_datos = (d1,d2) => {
    const resultado = Number(d1) + Number(d2)
    return resultado
}

//ejecuto la funcion
mostrar()

