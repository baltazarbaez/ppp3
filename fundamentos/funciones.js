function ejecutar(){
    const dato = document.getElementById("inp_dato").value
    const respuesta = calcular(dato,"") //llama la funcion y la const es para no perder la resp, enviar vacio si no se envia dos datos
    alert(respuesta)
}

function calcular(d1,d2){
    const resultado = Number(d1) + 2
    return resultado
}

const btn = document.getElementById("btn_ejecutar")
btn.addEventListener("click", ejecutar)//evento click

function cambiar_label(){
    const select = document.getElementById("slt_operacion").value
    const label = document.getElementById("lbl_dato")

    if(select == 0 ){
        label.textContent = "Opcion 1"//textConten para cambiar el texto
    }else{
        label.textContent = "Opcion 2"
    }

}