
// Get Email info
const getEmail = () => {
    const email = document.querySelector("#email");
    const getUser = localStorage.getItem("usuario");
    const verificar = JSON.parse(getUser);
    email.value = verificar.email;
  }
  
  const getPerfil = () => {
    const endereco = document.querySelector("#endereco");
    const cep = document.querySelector("#cep");
    const telefone = document.querySelector("#telefone");
    const cnpj = document.querySelector("#cnpj");
  
  
  
    const getUser = localStorage.getItem("usuario");
    const getName = localStorage.getItem("nome");
    const verificarNome = JSON.parse(getName);
    const verificar = JSON.parse(getUser);
    endereco.value = verificar.endereco;
    cep.value = verificar.cep;
    telefone.value = verificar.telefone;
    cnpj.value = verificar.cnpj;
  
  
    if (verificarNome.nome !== '' || verificarNome.nome !== undefined) {
      const nomeDiv = document.querySelector("#nomeDiv");
      const inputNome = document.querySelector("#nome");
      const nomeH1 = document.querySelectorAll(".nome");
      nomeH1[0].innerHTML = verificarNome.nome;
      nomeH1[1].innerHTML = verificarNome.nome;
      inputNome.remove();
      nomeDiv.innerHTML = `<input type="hidden" class="form-control" id="nome" name="nome" value="">`;
      }
  }
  
  // Verificar Perfil infos 
  const verifyPerfilInfo = () => {
    const getUser = localStorage.getItem("usuario");
    const verificar = JSON.parse(getUser);
    console.log(verificar);
    if(verificar.telefone == undefined || verificar.endereco == undefined || verificar.cep == undefined || verificar.cnpj == undefined){
      return;
    }  else if (verificar.telefone == '' || verificar.endereco == '' || verificar.cep == '' || verificar.cnpj == '') {
      return;
    } else {
      getPerfil();
    }
  }
  
  const setNome = () => {
    const nome = document.querySelector("#nome").value;
    if (!nome || nome == '' || nome == undefined) {
      return;
    } else {
      localStorage.setItem('nome', JSON.stringify(
        {
          nome: nome,
        }));
  
        }
  }
  
  
  // Enviar infos do perfil
  const setPerfil = (event) => {
    event.preventDefault();
    const nome = localStorage.getItem("nome");
    const container = document.getElementsByClassName("perfil-msg");
    const endereco = document.querySelector("#endereco").value;
    const cep = document.querySelector("#cep").value;
    const telefone = document.querySelector("#telefone").value;
    const cnpj = document.querySelector("#cnpj").value;
  
    const getUser = localStorage.getItem("usuario");
    const verificar = JSON.parse(getUser);
    const email = verificar.email;
    const senha = verificar.senha;
    
  
  
    if (nome == '' || endereco == '' || cep == '' || telefone == '' || cnpj == '') {
      container[0].innerHTML = `<div class="alert alert-danger" role="alert">
      Preencha todos os campos!
    </div>`;
    } else {
      localStorage.setItem('usuario', JSON.stringify(
        {
          email: email,
          senha: senha,
          endereco: endereco,
          cep: cep,
          telefone: telefone,
          cnpj: cnpj
        }
        ));
        setNome();
        container[0].innerHTML = `<div class="alert alert-success" role="alert">
        Informações atualizadas com sucesso!
      </div>`;
      setTimeout(() => {
        window.location.href = "perfil.html";
      }, 1000);
      getPerfil();
    }
  }