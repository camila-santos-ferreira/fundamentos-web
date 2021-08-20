let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Invalid Email!"
    } else {
        txtEmail.innerHTML = ""
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")
    if(mensagem.value.length > 250) {
        txtMensagem.innerHTML = "Exceeded the 250 character limit..."
    } else {
        txtMensagem.innerHTML = ""
    }
}