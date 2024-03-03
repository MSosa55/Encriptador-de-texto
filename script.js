const textArea = document.querySelector(".cajaTexto1");
const mensaje = document.querySelector(".cajaTexto2");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function encriptar(cadenaEncriptada){
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
       ];
       cadenaEncriptada = cadenaEncriptada.tolowerCase();
}


