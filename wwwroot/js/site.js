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
  var telefoneInputs = document.querySelectorAll(".telefone");

  telefoneInputs.forEach(function(telefoneInput) {
    telefoneInput.addEventListener("input", function() {
      formataTelefone(telefoneInput);
    });
  });

  function formataTelefone(input) {
    var telefone = input.value;
    telefone = telefone.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

    // Limita o número de caracteres do telefone
    if (telefone.length > 11) {
      telefone = telefone.slice(0, 11);
    }

    // Aplica a formatação (exemplo: (12) 34567-8901)
    var formattedTelefone = "(" + telefone.substring(0, 2) + ") " + telefone.substring(2, 7) + "-" + telefone.substring(7, 11);

    // Atualiza o valor do input com a formatação
    input.value = formattedTelefone;
  }

  telefoneInputs.forEach(function(telefoneInput) {
    telefoneInput.addEventListener("keydown", function(event) {
      // Impede o uso da barra de espaço
      if (event.keyCode === 32) {
        event.preventDefault();
      }
    });

    telefoneInput.addEventListener("input", function(event) {
      // Limita o número máximo de caracteres (14)
      var telefone = telefoneInput.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

      if (telefone.length > 14) {
        telefoneInput.value = telefoneInput.value.slice(0, 14);
      }
    });
  });
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




