let arraysCaracteres = ["+", "-", "/", "*", "."]

const error = document.getElementById("error")

let mostrarMensajeError = false

let p = document.createElement("p")

let pantallaCalcular2 = document.getElementById("pantalla")


function numero(nuevocaracter) {
    let anteULtimoEsEspecial = false
    let nuevoCaracterEsEspecial = false
    let anteultimo = pantallaCalcular2.value.charAt(pantallaCalcular2.value.length - 1)
    arraysCaracteres.forEach(element => {
    if(anteultimo === element){
        anteULtimoEsEspecial = true
    }
    if(nuevocaracter === element){
        nuevoCaracterEsEspecial = true
    }
    
    });
    if(!anteULtimoEsEspecial || !nuevoCaracterEsEspecial){
        pantallaCalcular2.value += nuevocaracter;
    }
}

function borrar() {
    document.getElementById("pantalla").value = "";
    p.innerHTML = ""
    mostrarMensajeError = false
}

function calcular() {
    const pantalla = document.getElementById("pantalla");
    if (!pantalla.value && mostrarMensajeError === false) {
        p.innerHTML = "por favor ingrese un numero para continuar"
        p.classList.add("cambiarpdejs")
        error.appendChild(p)
        mostrarMensajeError = true
    }
    else if (pantalla.value) {
        const resultado = eval(pantalla.value);
        document.getElementById("pantalla").value = resultado;
        let resultados = document.getElementById("resultados")
        let mensajeResultados = document.createElement("p")
        mensajeResultados.innerHTML = `el resultado de tu suma es ${resultado}`
        resultados.appendChild(mensajeResultados);
        p.innerHTML = ""
        mostrarMensajeError = false
    }
}

function borrarUnSoloDigito() {
    const pantallaBorrar = document.getElementById("pantalla")
    pantallaBorrar.value = pantallaBorrar.value.slice(0, -1)
}

// ``