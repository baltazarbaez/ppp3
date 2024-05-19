//funcion que toma los valores del input para realizar las operaciones
//y llama la funcion para calcular
function ejecutar(){
    const dato1 = document.getElementById("inp_dato1").value
    const dato2 = document.getElementById("inp_dato2").value
    const respuesta = calcular(dato1,dato2)
    alert("El resultado es: "+ respuesta)
}

//funcion para calcular, segun la seleccion hace la operacion correspondiente
function calcular(d1,d2){
    const select = document.getElementById("ley_ohm").value
   if (select == 0){
      const resultado = d1 / d2
        return resultado
    }
    if (select == 1){
        const resultado = d1 / d2
        return resultado
    }
    if (select == 2){
        const resultado = d1 * d2
        return resultado
    }

   
}
// Funcion cambia el texto del label segun select
function cambiar_label(){
    const select = document.getElementById("ley_ohm").value
    const label = document.getElementById("lbl_dato1")
    const labelb = document.getElementById("lbl_dato2")

    if(select == 0 ){
        label.textContent = "Tension"
        labelb.textContent = "Intensidad"
    }
    if (select == 1 ){
        label.textContent = "Tension"
        labelb.textContent = "Resistencia"
    }
    if (select == 2 ){
        label.textContent = "Intensidad"
        labelb.textContent = "Resistencia"
    }
}

const btn = document.getElementById("btn_ejecutar")
btn.addEventListener("click", ejecutar)//evento click