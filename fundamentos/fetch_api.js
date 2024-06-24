//fetch solicita una url por donde viene la info
//async declara como asincronica, permite usar await(esperar)
//await es para que se ejecute todo antes de pasar a otra lineas
const consumir_api = async () => {
    //fetch trae es json no javscrpt
    //await cuando es muy pesado y se necesita esperar
    const publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts')
    //necesita ser decl asi:
    const datos = await publicaciones.json()

    datos.array.forEach(element => {
        console.log(element.title)
    });
}
consumir_api()
