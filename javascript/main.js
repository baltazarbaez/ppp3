    /**
     *comenta varias lineas
     **/
     // console.log ("Inspeccionando consola") //  "" cuando es cadena
    //funcion clasica


    function mostrar (){

        // let mensaje = "Inspeccionando consola"
        // var es peligroso ***** let es solo para ese entorno, no tiene existencia para afuera
        //.value es para recolectar lso datos de inputs
    /**  const nombre =  document.getElementById("inp_nombre").value
      const apellido = document.getElementById("inp_apellido").value

      const mensaje = nombre+', '+apellido*/

      //  console.log (mensaje)

        const d1 = document.getElementById("inp_nombre").value
        const d2 = document.getElementById("inp_apellido").value

        const select = document.getElementById("slt_operacion").value

        let resultado = null
        if (select == 0){
            resultado = Number(d1) + Number(d2) // solo en la suma se especifica qeu es n°
        }
        if (select == 1){
            resultado = d1 - d2
        }
        if (select == 2){
            resultado = d1 * d2
        }
        if (select == 3){
            resultado = d1 / d2
        }

     //  alert(resultado)

        document.getElementById("h_resultado").textContent = resultado
    }
//llamado a funcion forma clasica(vieja) onclick="mostrar()" en el boton de html
// forma nueva haciendo id="nombredelID" ej="btn_aceptar"
    const btn = document.getElementById("btn_aceptar") //busca y encuetnra el elemento del id
    btn.addEventListener("click",mostrar) //cuando haces click muestra el mensaje


