let entradaEncriptar = document.getElementById("entradaEncriptar");
let botonEncriptar = document.getElementById("botonEncriptar");
let resultadoEncriptado = document.getElementById("txt-campo-resultado");

let cambios = {
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat"
}

let palabrasDesencriptar = {
    "ai" : "a",
    "enter" : "e",
    "imes" : "i",
    "ober" : "o",
    "ufat" : "u"
}

function encriptar() {
    let texto = entradaEncriptar.value;
    console.log(texto);

    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if(caracter in cambios){
            textoEncriptado += cambios[caracter];
            console.log(cambios[caracter]);
        } else {
            textoEncriptado += caracter;
        }
    }


    resultadoEncriptado.innerHTML = textoEncriptado;

    mostrarResultado();
    console.log(textoEncriptado)
    limparCajasDeTexto();
}

function desencriptar() {
    let texto = entradaEncriptar.value;
    let textoDesencriptado = "";

    textoDesencriptado = texto.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    resultadoEncriptado.innerHTML = textoDesencriptado;

    mostrarResultado();
    console.log(textoDesencriptado)
    limparCajasDeTexto();
}



function limparCajasDeTexto() {
    entradaEncriptar.value = "";
}

function mostrarResultado() {
    let imagen = document.getElementById("imagen-resultado");
    imagen.style.display = "none";

    let textoInformacion = document.getElementById("txt-campo-info");
    textoInformacion.style.display = "none";

    let textoInstrucciones = document.getElementById("txt-campo-instrucciones");
    textoInstrucciones.style.display = "none";

    let campoResultado = document.getElementById("txt-campo-resultado");
    campoResultado.style.display = "block";

    let botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.style.display = "block";
}

function copiarTexto() {
    navigator.permissions.query({name: 'clipboard-write'}).then(
        result => {
            if (result.state == 'granted' || result.state == 'prompt') {
                navigator.clipboard.writeText(resultadoEncriptado.innerHTML).then(
                    () => {
                        console.log("Texto copiado");

                    }
                )
            } else {
                console.log("No se puede copiar el texto");
            }
        }
    )
}

function copiadoExitoso() {
    let botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.innerHTML = "Copiado";
    botonCopiar.style.backgroundColor = "#00ff00";
    botonCopiar.style.borderColor = "#00ff00";
}