//declarar e inicializar una variable
//variable global
var numero = 2;

//condicional expresión clásica
if(numero > 6){
    console.log('Está aprobado')
}else{
    console.log('Desaprobado')
}

//condicional - expresion ternaria
var respuesta = (numero > 6) ? 'Aprobado':'Desaprobado'
console.log(respuesta)

//Diferencias en LET y VAR

var x = 44
if(x == 44){
    x = 74
    console.log(x)//74
}
console.log(x)//74

let y = 50
if(y == 50){
    let y = 11
    console.log(y)//11
}
console.log(y)//50

//constantes
const nombre = 'Juan'
//nombre = 'Pepe' no se puede asignar un nuevo valor a una constante