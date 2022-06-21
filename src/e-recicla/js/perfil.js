// Get Email info

const getEmail = () => {
    const email = document.querySelector("#email");
    const telefone = document.querySelector("#telefone");
    const cidade = document.querySelector("#cidade");
    const nome = document.querySelector(".nomePerfil");
    const getUser = localStorage.getItem("usuario");
    const verificar = JSON.parse(getUser);
    email.value = verificar.email;
    telefone.value = verificar.telefone;
    cidade.value = verificar.cidade;


    nome.innerHTML = verificar.nome;
  }
  
  const getPerfil = () => {
    const cidade = document.querySelector("#cidade");
    const endereco = document.querySelector("#endereco");
    const cep = document.querySelector("#cep");
    const telefone = document.querySelector("#telefone");
  
  
  
    const getUser = localStorage.getItem("usuario");
    const verificar = JSON.parse(getUser);
    endereco.value = verificar.endereco;
    cep.value = verificar.cep;
    telefone.value = verificar.telefone;
    cidade.value = verificar.cidade;

  
  }
  
  // Verificar Perfil infos 
  const verifyPerfilInfo = () => {
    const getUser = localStorage.getItem("usuario");
    const verificar = JSON.parse(getUser);
    console.log(verificar);
    if(verificar.telefone == undefined || verificar.endereco == undefined || verificar.cep == undefined){
      return;
    }  else if (verificar.telefone == '' || verificar.endereco == '' || verificar.cep == '' ) {
      return;
    } else {
      getPerfil();
    }
  }
  
  
  
  // Enviar infos do perfil
  const setPerfil = (event) => {
    event.preventDefault();
    const container = document.getElementsByClassName("perfil-msg");
    const endereco = document.querySelector("#endereco").value;
    const cep = document.querySelector("#cep").value;
    const telefone = document.querySelector("#telefone").value;
    const cidade = document.querySelector("#cidade").value;
  
    const getUser = localStorage.getItem("usuario");
    const verificar = JSON.parse(getUser);
    const nome = verificar.nome;
    const email = verificar.email;
    const senha = verificar.senha;
    
  
  
    if (nome == '' || endereco == '' || cep == '' || telefone == '' || cidade == '') {
      container[0].innerHTML = `<div class="alert alert-danger" role="alert">
      Preencha todos os campos!
    </div>`;
    } else {
      localStorage.setItem('usuario', JSON.stringify(
        {
          nome: nome,
          email: email,
          senha: senha,
          endereco: endereco,
          cep: cep,
          telefone: telefone,
          cidade: cidade
        }
        ));
        container[0].innerHTML = `<div class="alert alert-success" role="alert">
        Informações atualizadas com sucesso!
      </div>`;
      setTimeout(() => {
        window.location.href = "perfil.html";
      }, 1000);
      getPerfil();
    }
  }
