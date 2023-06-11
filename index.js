function formatCnpj(event) {
    const input = event.target;
    let cnpj = input.value.replace(/\D/g, '');
    const maxCnpjLength = 14;
  
    if (cnpj.length > maxCnpjLength) {
      cnpj = cnpj.slice(0, maxCnpjLength);
    }
  
    cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    input.value = cnpj;
  }

  
  function formatTel(event) {
    const input = event.target;
    let tel = input.value.replace(/\D/g, '');
    const maxTelLength = 10;
  
    if (tel.length > maxTelLength) {
      tel = tel.slice(0, maxTelLength);
    }
  
    if (tel.length === 10) {
      tel = tel.replace(/(\d{2})(\d{5})(\d{3})/, '($1) $2-$3');
    } else if (tel.length === 10) {
      tel = tel.replace(/(\d{2})(\d{4})(\d{3})/, '($1) $2-$3');
    }
  
    input.value = tel;
  }
  

  function validateForm() {
    // Obtenha os valores dos campos
    const fornecedor = document.getElementById('fornecedor').value;
    const cnpj = document.getElementById('cnpj-input').value;
    const ramo = document.getElementById('ramoSelect').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('tel-input').value;

    // Verifique se algum campo está vazio ou preenchido incorretamente
    if (
      fornecedor === '' ||
      cnpj === '' ||
      ramo === '' ||
      email === '' ||
      telefone === ''
    ) {
      alert('Por favor, preencha todos os campos corretamente.');
      return false; // Impede o envio do formulário
    }else{
        alert("Cadastro realizado com sucesso")
    }

    // Restante do código para enviar o formulário ou executar ações adicionais
    // ...

    return true; // Permite o envio do formulário
  }