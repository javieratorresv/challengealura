document.getElementById("encriptarBtn").addEventListener("click", encriptarTexto);
document.getElementById("desencriptarBtn").addEventListener("click", desencriptarTexto);
document.getElementById("copiarBtn").addEventListener("click", copiarAlPortapapeles);

function encriptarTexto() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = encriptar(texto);
    document.getElementById("resultado").innerHTML = `<p>${textoEncriptado}</p>`;
}

function desencriptarTexto() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = desencriptar(texto);
    document.getElementById("resultado").innerHTML = `<p>${textoDesencriptado}</p>`;
}

function encriptar(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

function desencriptar(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

function copiarAlPortapapeles() {
    let resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado).then(() => {
        alert("Texto copiado");
    }).catch(err => {
        console.error("Error al copiar: ", err);
    });
}
