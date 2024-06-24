// objeto empleado, dentro hay propiedades
const empleado = {
    nom: 'Juan',
    apellido: 'Rodriguez',//si finaliza no va la coma
    dni:33554802,
    correo:{ // se puede crear otro objeto dentro de la propiedad
        gmail: 'juanqgmail.com',
        outlook: 'juan@outlook.com'
    }
}
//mostrar los datos met tradicional
const nom = empleado.nom
//const gmail = empleado.correo.gmail//para llamar lo que esta dentro se usa .
//const outlook = empleado.correo.outlook

// otra forma de mostrar: destructuring object
const { gmail,outlook } = empleado.correo //permite declarar varias

const { apellido,dni } = empleado // si me paro en empleado ya reconoce apellido

//muestra
console.log(`
nom: ${nom}
correo gmail: ${gmail}
correo outlook: ${outlook}
Apellido: ${apellido}
DNI: ${dni}
`)
