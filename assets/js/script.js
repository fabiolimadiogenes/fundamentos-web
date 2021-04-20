/*
Case Sensitive

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome invalido."
        txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = "Nome válido."
        txtNome.style.color = "green"
        nomeOk = true
    }
}    

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail Invalido."
        txtEmail.style.color = "red"
    } else{
        txtEmail.innerHTML = "E-mail Válido."
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Limite de 100 caracteres atingido."
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Fomrmulário enviado com sucesso!")
    }else{
        alert("Virifique os pontos incorretos e preencha o formulário corretamente.")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "560px"
    mapa.style.height = "315px"
}