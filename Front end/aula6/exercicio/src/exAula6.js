//1
const btnCurtir = document.querySelector("#btn-curtir")
const contador = document.querySelector("#contador")
let numeroCurtidas = 0
btnCurtir.addEventListener("click", () => {
    numeroCurtidas++
    contador.textContent = numeroCurtidas
})

//2
const campoTexto = document.querySelector("#campo-texto")
const previewTexto = document.querySelector("#preview-texto")
campoTexto.addEventListener("input", () => {
    previewTexto.textContent = `Digitando: ${campoTexto.value}`
}
)



//3
const caixaCor = document.querySelector("#caixa-cor")
caixaCor.addEventListener("mouseenter", () => {
    caixaCor.style.backgroundColor = "blue"
})
caixaCor.addEventListener("mouseleave", () => {
    caixaCor.style.backgroundColor = "initial"
}
)
