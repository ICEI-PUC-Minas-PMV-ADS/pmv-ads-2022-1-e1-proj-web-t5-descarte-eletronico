function registerEmpresaColetora (event) {
  event.preventDefault();
  const container = document.getElementsByClassName("login-msg");
  const nome = document.getElementById("nome").value;
  const empresa = document.getElementById("empresa").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("passconfirmation").value;

  if (nome === '' || empresa === '' || email === '' || telefone === '' || senha === '' || confirmarSenha === '') {
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Preencha todos os campos corretamente!
  </div>`;
  }
  else if(senha !== confirmarSenha){
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Os campos de senha precisam ser iguais!
  </div>`;
  }

 else{
  localStorage.setItem('empresa', JSON.stringify(
    {
      nome: nome,
      empresa: empresa,
      email: email,
      telefone: telefone,
      senha: senha
    }
    ));

    container[0].innerHTML = `<div class="alert alert-success" role="alert">
    O cadastro da empresa foi realizado com sucesso!
  </div>`;
}
}