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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//funções para verificação dos campos

// Obtém referências para os elementos de senha e confirmar senha
const senhaInputs = document.querySelectorAll('.senha');
const confirmarSenhaInputs = document.querySelectorAll('.senhaConf');
const submitButtons = document.querySelectorAll('.submitBtn');
const mensagemErro = document.querySelector('#mensagem-erro');

// Função para verificar as senhas em tempo real
function verificarSenhas() {
  let todasAsSenhasIguais = true;

  // Itera sobre os campos de senha e confirmar senha
  for (let i = 0; i < senhaInputs.length; i++) {
    const senha = senhaInputs[i].value;
    const confirmarSenha = confirmarSenhaInputs[i].value;

    // Verifica se as senhas são idênticas
    if (senha !== confirmarSenha || senha === '') {
      todasAsSenhasIguais = false;
        mensagemErro.textContent = 'Senhas não combinam';
        mensagemErro.style.color = 'red';
      break;
    } else {
        mensagemErro.textContent = 'Senhas combinam';
        mensagemErro.style.color = 'green';
    }
  }

  // Habilita ou desabilita todos os botões de envio
  submitButtons.forEach((button) => {
    button.disabled = !todasAsSenhasIguais;
  });
}

// Desabilita todos os botões de envio no início
submitButtons.forEach((button) => {
  button.disabled = true;
});

// Adiciona um ouvinte de evento 'input' para os campos de senha e confirmar senha
senhaInputs.forEach((input) => {
  input.addEventListener('input', verificarSenhas);
});

confirmarSenhaInputs.forEach((input) => {
  input.addEventListener('input', verificarSenhas);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










////////////////////////////////////////////////////////////////////////////////////////////////////////




