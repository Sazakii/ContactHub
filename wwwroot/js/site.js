// evento que adiciona a classe active aos container que possuem a classe revela, que junto com o css, faz aparecer o conteudo ao scrollar.
window.addEventListener('scroll', revelar);

function revelar() {
    let revelas = document.querySelectorAll('.revela');

    for(let i = 0; i < revelas.length; i++) {

        let tamanhoJanela = window.innerHeight;
        let revelarTop = revelas[i].getBoundingClientRect().top;
        let revelarPonto = 150;

        if(revelarTop < tamanhoJanela - revelarPonto) {
            revelas[i].classList.add('active');
         } //else {
        //     revelas[i].classList.remove('active');
        // }
    }
}

//funções para verificação dos campos

function verificarSenha() {
    let senha = document.querySelectorAll('.senha').value;
    let senhaConf = document.querySelectorAll('.senhaConf').value;
    console.log(senha,senhaConf);

    if(senha.length != 0) {
        if(senha == senhaConf){
            window.alert("Senhas combinam");
        } else {
            window.alert("Senhas não combinam");
            senha.innerhtml = "";
            senhaConf.innerhtml = "";
        }
    }
}

function verificarCampos() {
    let nome = document.querySelectorAll('.nome').value;
    let telefone = document.querySelectorAll('.telefone').value;
    let email = document.querySelectorAll('.email').value;
    let senha = document.querySelectorAll('.senha').value;
    let senhaConf = document.querySelectorAll('.senhaConf').value;

    if (nome == 0 || telefone == 0 || email == 0 || senha == 0 || senhaConf == 0) {
        window.alert("Preencha todos os campos.");
    }
}


