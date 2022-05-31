const navbar = document.getElementById("collapseNavbar");


if (window.matchMedia("(min-height:800px)").matches && window.matchMedia("(min-width:1400px)").matches) {
    navbar.className="sidebar collapse show collapse-horizontal";
  } else {
    navbar.className="sidebar collapse collapse-horizontal";
}


// login form localStorage
const loginForm = (event) => {
  event.preventDefault();
  const container = document.getElementsByClassName("login-msg");
  const getUser = localStorage.getItem("usuario");
  const verificar = JSON.parse(getUser);
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === '' || senha === '') {
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificar.email + ' ' + verificar.senha);
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Preencha todos os campos corretamente!
  </div>`;
  }
  else if(email !== verificar.email || senha !== verificar.senha){
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificar.email + ' ' + verificar.senha);
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Verifique seu email e/ou senha.
  </div>`;
  }

 else{
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificar.email + ' ' + verificar.senha);
    container[0].innerHTML = `<div class="alert alert-success" role="alert">
    Logado com sucesso! Por favor, aguarde...
  </div>`;
    setTimeout(() => {
      window.location.href = "perfil.html";
    }, 2000);
  }
}


// password reset form localStorage
const pwdReset = (event) => {
  event.preventDefault();
  const container = document.getElementsByClassName("login-msg");
  const getUser = localStorage.getItem("usuario");
  const verificar = JSON.parse(getUser);
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === '' || senha === '') {
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificar.email + ' ' + verificar.senha);
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Preencha todos os campos corretamente!
  </div>`;
  }
  else if(email !== verificar.email){
    console.log('ENVIADO -> '+email + ' ' + senha);
    console.log('CORRETO -> '+verificar.email + ' ' + verificar.senha);
    container[0].innerHTML = `<div class="alert alert-danger" role="alert">
    Verifique o seu email.
  </div>`;
  }

 else{
  localStorage.setItem('usuario', JSON.stringify(
    {
      email: email,
      senha: senha
    }
    ));

    container[0].innerHTML = `<div class="alert alert-success" role="alert">
    Senha atualizada com sucesso!
  </div>`;
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  }
}


