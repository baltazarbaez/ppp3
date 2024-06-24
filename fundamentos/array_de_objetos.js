//
const alumnos = [
{ //cada objeto es el elemento del areglo, osea aca hay dos, con sus propiedades
    legajo: '234',
    usuario:'dvillegas',
    password:'1234',
    calificaciones:{
        matematica:8,
        sociales:7
    }
},
{
legajo: '235',
usuario:'pepito',
password:'123456',
calificaciones:{
    matematica:10,
    sociales:6 //la ultima linea no lleva coma
}
}
]
//foreach para recorrer
alumnos.forEach(element => {
    console.log('usuario: '+element.usuario),//cadenas van en comillas simples
    console.log(element.legajo)
});



