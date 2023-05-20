//funções para verificação dos campos

let mensagem = document.querySelector('#verificar')

 function verificarSenha() {
    let senha = document.querySelector('#senha').value
    let senhaConf = document.querySelector('#senhaConf').value
    console.log(senha,senhaConf)

    if(senha.length != 0) {
        if(senha == senhaConf){
            mensagem.textContent = "Senhas idênticas"
            mensagem.style.color = "#049902"
        } else {
            mensagem.textContent = "Senhas não combinam"
            mensagem.style.color = "#fc0022"
        }
    }
}

function verificarCampos() {
    let nome = document.querySelector('#nome').value
    let telefone = document.querySelector('#telefone').value
    let email = document.querySelector('#email').value
    let senha = document.querySelector('#senha').value
    let senhaConf = document.querySelector('#senhaConf').value

    if (nome == 0 || telefone == 0 || email == 0 || senha == 0 || senhaConf ==0) {
        window.alert("Preencha todos os campos.")
    }
}
