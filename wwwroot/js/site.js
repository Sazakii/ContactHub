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

window.onload = function() {
  // Função para formatar telefones
  function formatarTelefones() {
    const telefones = document.getElementsByClassName('telefone');

    for (let i = 0; i < telefones.length; i++) {
      const telefone = telefones[i];

      telefone.addEventListener('input', function() {
        const input = this;
        let valor = input.value;

        // Remove todos os caracteres não numéricos
        valor = valor.replace(/\D/g, '');

        // Limita o tamanho máximo do input
        valor = valor.slice(0, 11);

        // Formatação do telefone (00)00000-0000
        let formattedValue = '';
        let counter = 0;

        for (let j = 0; j < valor.length; j++) {
          if (j === 0) {
            formattedValue += '(';
          } else if (j === 2) {
            formattedValue += ') ';
          } else if (j === 7) {
            formattedValue += '-';
          }

          formattedValue += valor[j];
          counter++;
        }

        input.value = formattedValue;
      });
    }
  }

  // Chama a função para formatar telefones
  formatarTelefones();
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Obtém referências para os elementos do formulário
const form = document.querySelector('#cadastro-form');
const inputs = form.querySelectorAll('.campo');
const senhaInput = form.querySelector('.senha');
const confirmarSenhaInput = form.querySelector('.senhaConf');
const submitButton = form.querySelector('.submitBtn');
const mensagemErro = form.querySelector('#mensagem-erro');

// Função para verificar se todos os campos estão preenchidos e as senhas coincidem
function verificarFormulario() {
  let todosPreenchidos = true;
  let senhasCoincidem = senhaInput.value === confirmarSenhaInput.value;

  inputs.forEach((input) => {
    if (input.value === '') {
      todosPreenchidos = false;
      return;
    }
  });

  if (todosPreenchidos && senhasCoincidem) {
    submitButton.disabled = false;
    mensagemErro.textContent = '';
  } else {
    submitButton.disabled = true;

    if (!todosPreenchidos) {
      mensagemErro.textContent = 'Preencha todos os campos';
    } else if (!senhasCoincidem) {
      mensagemErro.textContent = 'As senhas não coincidem';
    }

    mensagemErro.style.color = 'red';
  }
}

// Adiciona um ouvinte de evento 'input' para cada campo do formulário
inputs.forEach((input) => {
  input.addEventListener('input', verificarFormulario);
});

senhaInput.addEventListener('input', verificarFormulario);
confirmarSenhaInput.addEventListener('input', verificarFormulario);

// Verificar formulário ao carregar a página
window.addEventListener('DOMContentLoaded', verificarFormulario);

////////////////////////////////////////////////////////////////////////////////////////////////////////




