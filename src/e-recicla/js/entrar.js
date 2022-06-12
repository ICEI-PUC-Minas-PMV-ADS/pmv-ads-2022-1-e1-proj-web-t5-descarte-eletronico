// login form localStorage
const loginForm = (event) => {
  event.preventDefault();
  const container = document.getElementsByClassName("login-msg");
  const getUser = localStorage.getItem("usuario");
  const getEmpresa = localStorage.getItem("empresa");
  const verificarUser = JSON.parse(getUser);
  const verificarEmpresa = JSON.parse(getEmpresa);

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const checkUsuario = document.getElementById("usuario").checked;
  const checkEmpresa = document.getElementById("empresa").checked;


  if(checkEmpresa == true){
  if (email === '' || senha === '') {
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificarEmpresa.email + ' ' + verificarEmpresa.senha);
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Preencha todos os campos corretamente!
  </div>`;
  }
  else if(email !== verificarEmpresa.email || senha !== verificarEmpresa.senha){
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificarEmpresa.email + ' ' + verificarEmpresa.senha);
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Verifique seu email e/ou senha.
  </div>`;
  }

 else{
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificarEmpresa.email + ' ' + verificarEmpresa.senha);
    container[0].innerHTML = `<div class="alert alert-success" role="alert">
    Logado com sucesso! Por favor, aguarde...
  </div>`;
  localStorage.setItem("usuarioLogado", false);
  localStorage.setItem("empresaLogado", true);

    setTimeout(() => {
      window.location.href = "perfil-empresacoletora.html";
    }, 2000);
  }
}
 else if(checkUsuario == true){
  if (email === '' || senha === '') {
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificarUser.email + ' ' + verificarUser.senha);
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Preencha todos os campos corretamente!
  </div>`;
  }
  else if(email !== verificarUser.email || senha !== verificarUser.senha){
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificarUser.email + ' ' + verificarUser.senha);
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Verifique seu email e/ou senha.
  </div>`;
  }

 else{
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificarUser.email + ' ' + verificarUser.senha);
    container[0].innerHTML = `<div class="alert alert-success" role="alert">
    Logado com sucesso! Por favor, aguarde...
  </div>`;
  localStorage.setItem("empresaLogado", false);
  localStorage.setItem("usuarioLogado", true);
  setTimeout(() => {
    window.location.href = "perfil.html";
  }, 2000);
  }

}

}
