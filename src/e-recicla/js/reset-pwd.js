// password reset form localStorage
const pwdReset = (event) => {
    event.preventDefault();
    const container = document.getElementsByClassName("login-msg");
    const checkEmpresa = document.getElementById("checkbox").checked;
    const getUser = localStorage.getItem("usuario");
    const getEmpresa = localStorage.getItem("empresa");

    const verificar = JSON.parse(getUser || getEmpresa);
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

  
    if(checkEmpresa == false){
    const nome = JSON.parse(getUser).nome;
    const emailUser = JSON.parse(getUser).email;
    const endereco = JSON.parse(getUser).endereco;
    const cidade = JSON.parse(getUser).cidade;
    const telefone = JSON.parse(getUser).telefone;
    const cep = JSON.parse(getUser).cep;

  
    if (email === '' || senha === '') {
      container[0].innerHTML = `<div class="alert alert-danger" role="alert">
      Preencha todos os campos corretamente!
    </div>`;
    }
    else if(email !== emailUser){
      console.log('ENVIADO -> '+email);
      console.log('CORRETO -> '+emailUser);
      container[0].innerHTML = `<div class="alert alert-danger" role="alert">
      Verifique o seu email.
    </div>`;
    }
  
   else{
    localStorage.setItem('usuario', JSON.stringify(
      {
        nome: nome,
        email: emailUser,
        senha: senha,
        cidade: cidade,
        endereco: endereco,
        telefone: telefone,
        cep: cep,
      }
      ));
  
      container[0].innerHTML = `<div class="alert alert-success" role="alert">
      Senha atualizada com sucesso!
    </div>`;
      setTimeout(() => {
        window.location.href = "entrar.html";
      }, 2000);
    }
  } else {
    const empresa = JSON.parse(getEmpresa).empresa;
    const emailEmpresa = JSON.parse(getEmpresa).email;
    const endereco = JSON.parse(getEmpresa).endereco;
    const telefone = JSON.parse(getEmpresa).telefone;
    const cep = JSON.parse(getEmpresa).cep;
    const cnpj = JSON.parse(getEmpresa).cnpj;
    const materiais = JSON.parse(getEmpresa).materiais;


    if (email === '' || senha === '') {
        container[0].innerHTML = `<div class="alert alert-danger" role="alert">
        Preencha todos os campos corretamente!
      </div>`;
      }
      else if(email !== emailEmpresa){
        console.log('ENVIADO -> '+email);
        console.log('CORRETO -> '+emailEmpresa);
        container[0].innerHTML = `<div class="alert alert-danger" role="alert">
        Verifique o seu email.
      </div>`;
      }
    
     else{
      localStorage.setItem('empresa', JSON.stringify(
        {
          empresa: empresa,
          email: emailEmpresa,
          senha: senha,
          endereco: endereco,
          telefone: telefone,
          cep: cep,
          cnpj: cnpj,
          materiais: materiais,
        }
        ));
    
        container[0].innerHTML = `<div class="alert alert-success" role="alert">
        Senha atualizada com sucesso!
      </div>`;
        setTimeout(() => {
          window.location.href = "entrar.html";
        }, 2000);
      }
  }
}