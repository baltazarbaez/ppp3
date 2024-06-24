// si hay la misma variable/constante en diferentes archivos va a dar error, no va a sobreescribir
const n = 1
const fecha = '27/05/2024'

//metodo tradicional para llamar las constantes
console.log('Mensaje de prueba: '+n+' fecha de hoy: '+fecha)


//metodo: template string
//utiliza las comillas alt gr comilla de la llave
//redactar en varias lineas, detecta los enter
console.log(`
Mensaje de prueba: ${n}
Fecha de hoy: ${fecha}
`)