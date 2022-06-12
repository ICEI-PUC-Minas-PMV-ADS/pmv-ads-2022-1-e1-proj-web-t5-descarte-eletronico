function registro (event) {
    event.preventDefault();
    const container = document.getElementsByClassName("login-msg");
    const nome = document.getElementById("name").value;
    const empresa = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cidade = document.getElementById("cidade").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("passconfirmation").value;
    const checkUsuario = document.getElementById("usuario").checked;
    const checkEmpresa = document.getElementById("empresa").checked;


    if(checkEmpresa == true){
  
    if (empresa === '' || email === '' || telefone === '' || cidade === '' || senha === '' || confirmarSenha === '') {
      container[0].innerHTML = `<div class="alert alert-danger" role="alert">
      Preencha todos os campos corretamente!
    </div>`;
    }
    else if(senha.length < 6){
      container[0].innerHTML = `<div class="alert alert-danger" role="alert">
      A senha precisa ter no mínimo 6 caracteres!
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
        empresa: empresa,
        email: email,
        telefone: telefone,
        cidade: cidade,
        senha: senha
      }
      ));
  
      container[0].innerHTML = `<div class="alert alert-success" role="alert">
      O cadastro da empresa foi realizado com sucesso!
    </div>`;
    setTimeout(() => {
      window.location.href = "entrar.html";
    }, 2000);
  }
    } else if(checkUsuario == true){
        if (nome === '' || email === '' || telefone === '' || cidade === '' || senha === '' || confirmarSenha === '') {
            container[0].innerHTML = `<div class="alert alert-danger" role="alert">
            Preencha todos os campos corretamente!
          </div>`;
          }
          else if(senha.length < 6){
            container[0].innerHTML = `<div class="alert alert-danger" role="alert">
            A senha precisa ter no mínimo 6 caracteres!
          </div>`;
          } 
          else if(senha !== confirmarSenha){
            container[0].innerHTML = `<div class="alert alert-danger" role="alert">
            Os campos de senha precisam ser iguais!
          </div>`;
          } 
        
         else{
          localStorage.setItem('usuario', JSON.stringify(
            {
              nome: nome,
              email: email,
              telefone: telefone,
              cidade: cidade,
              senha: senha
            }
            ));
        
            container[0].innerHTML = `<div class="alert alert-success" role="alert">
            O cadastro do usuário foi realizado com sucesso!
          </div>`;
          setTimeout(() => {
            window.location.href = "entrar.html";
          }, 2000);
        }
}   else{
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Selecione um tipo de usuário!
  </div>`;
}
}