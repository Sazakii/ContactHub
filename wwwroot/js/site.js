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
  // Obtém todos os campos de telefone e e-mail e o botão de envio do site
  var telefoneInputs = document.querySelectorAll('.telefone');
  var emailInputs = document.querySelectorAll('input[type="email"]');
  var submitButton = document.querySelector('button[type="submit"]');
  var errorMessageElement = document.getElementById('mensagem-erro');

  // Define a função de validação do campo de e-mail
  function validateEmail() {
    var email = this.value;
    var submitEnabled = false;
    var errorMessage = "";

    // Verifica se o e-mail contém "@" seguido de "gmail.com" ou "outlook.com"
    if (email.includes("@")) {
      var domain = email.split("@")[1];
      if (domain === "gmail.com" || domain === "outlook.com") {
        submitEnabled = true;
      } else {
        errorMessage = "Por favor, insira um e-mail válido (gmail.com ou outlook.com).";
      }
    } else {
      errorMessage = "Por favor, insira um e-mail válido.";
    }

    // Define a mensagem de erro e o estado do botão de envio
    errorMessageElement.textContent = errorMessage;
    submitButton.disabled = !submitEnabled;
  }

  // Define a função de formatação do campo de telefone
  function formatTelefone() {
    var telefone = this.value;
    var formattedTelefone = "";

    // Remove todos os caracteres não numéricos do telefone
    telefone = telefone.replace(/\D/g, "");

    // Limita o número máximo de caracteres para (00)00000-0000
    telefone = telefone.substring(0, 11);

    // Formata o telefone
    if (telefone.length > 0) {
      formattedTelefone = "(" + telefone.substring(0, 2);
    }
    if (telefone.length > 2) {
      formattedTelefone += ")" + telefone.substring(2, 7);
    }
    if (telefone.length > 7) {
      formattedTelefone += "-" + telefone.substring(7, 11);
    }

    // Atualiza o valor do campo de telefone
    this.value = formattedTelefone;

    // Verifica se o número máximo de caracteres foi alcançado
    var errorMessage = "";
    if (telefone.length < 11) {
      errorMessage = "Por favor, complete o preenchimento do número.";
    }
    errorMessageElement.textContent = errorMessage;
  }

  // Adiciona um ouvinte de evento de entrada para cada campo de telefone
  for (var i = 0; i < telefoneInputs.length; i++) {
    telefoneInputs[i].addEventListener('input', formatTelefone);
    telefoneInputs[i].addEventListener('keydown', function(e) {
      // Permite a tecla Backspace e Delete
      if (e.key === 'Backspace' || e.key === 'Delete') {
        return;
      }
      // Impede a digitação de caracteres especiais e espaços
      if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    });
  }

  // Adiciona um ouvinte de evento de entrada para cada campo de e-mail
  for (var i = 0; i < emailInputs.length; i++) {
    emailInputs[i].addEventListener('input', validateEmail);
  }
};





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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




