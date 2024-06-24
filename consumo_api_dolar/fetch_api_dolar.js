async function cons_api_dolar() {
    const cotizacion = await fetch("https://dolarapi.com/v1/dolares");
    
    // Convertir los datos recibidos en una expresión nativa de JavaScript
    const listado = await cotizacion.json();
    
    // Iterar sobre cada elemento en los datos recibidos y mostrar en la consola
    listado.forEach((element, index) => {
        console.log(`${index + 1} - Dolar ${element.nombre} - Compra: ${element.compra} - Venta: ${element.venta}`)
    });
}