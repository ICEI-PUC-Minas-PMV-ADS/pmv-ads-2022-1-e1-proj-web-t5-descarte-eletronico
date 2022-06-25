let dbEmpresas = {};
const empresas = localStorage.getItem('dbEmpresas');

// Get Email info
const getEmail = () => {
    const email = document.querySelector("#email");
    const telefone = document.querySelector("#telefone");
    const empresa = document.querySelector("#nomePerfil");
    const getUser = localStorage.getItem("empresa");
    const verificar = JSON.parse(getUser);
    email.value = verificar.email;
    telefone.value = verificar.telefone;
    empresa.value = verificar.empresa;
  }
  
  const getPerfil = () => {
    const cnpj = document.querySelector("#cnpj");
    const endereco = document.querySelector("#endereco");
    const cep = document.querySelector("#cep");
    const telefone = document.querySelector("#telefone");
  
  
  
    const getUser = localStorage.getItem("empresa");
    const verificar = JSON.parse(getUser);
    endereco.value = verificar.endereco;
    cep.value = verificar.cep;
    telefone.value = verificar.telefone;
    cnpj.value = verificar.cnpj || '';

  
  }
  
  // Verificar Perfil infos 
  const verifyPerfilInfo = () => {
    const getUser = localStorage.getItem("empresa");
    const verificar = JSON.parse(getUser);
    console.log(verificar);
    if(verificar.email == undefined || verificar.empresa == undefined || verificar.telefone == undefined || verificar.endereco == undefined || verificar.cep == undefined){
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
    const empresa = document.querySelector("#nomePerfil").value;
    const email = document.querySelector("#email").value;
    const endereco = document.querySelector("#endereco").value;
    const cep = document.querySelector("#cep").value;
    const telefone = document.querySelector("#telefone").value;
    const cnpj = document.querySelector("#cnpj").value;
    let baterias = document.querySelector("#baterias").checked;
    let telefones = document.querySelector("#telefones").checked;
    let computadores = document.querySelector("#computadores").checked;
    let domesticos = document.querySelector("#domesticos").checked;
  
    const getUser = localStorage.getItem("empresa");
    const verificar = JSON.parse(getUser);
    const senha = verificar.senha;
    
  
    if(baterias == false && telefones == false && computadores == false && domesticos == false){
      container[0].innerHTML = `<div class="alert alert-danger" role="alert">
      Selecione pelo menos um material para descarte!
    </div>`
    return;
    } else {
      let materiais = [];
      if(baterias == true){
        materiais.push("Baterias, Pilhas");
      }
      if(telefones == true){
        materiais.push(" Telefones, Celulares");
      }
      if(computadores == true){
        materiais.push(" Computadores, Notebooks");
      }
      if(domesticos == true){
        materiais.push(" Geladeiras, Televisores, Microondas, etc");
      }

    if (email == '' || empresa == '' || endereco == '' || cep == '' || telefone == '' || cnpj == '') {
      container[0].innerHTML = `<div class="alert alert-danger" role="alert">
      Preencha todos os campos!
    </div>`;
    } else {
      localStorage.setItem('empresa', JSON.stringify(
        {
          email: email,
          senha: senha,
          empresa: empresa,
          endereco: endereco,
          cep: cep,
          telefone: telefone,
          cnpj: cnpj,
          materiais: materiais
        }
        ));
        const data_empresas = {
          empresas: [
              {
                  empresa: 'Empresa 1',
                  endereco: 'Avenida Abílio Machado 810',
                  cep: '30820971',
                  email: 'empresacoletora1@email.com',
                  telefone: '31981433985',
                  materiais: ['Pilhas', 'Baterias', 'Telefones', 'Celulares'],
      },
              {
              empresa: 'Empresa 2',
              endereco: 'Rua São Domingos',
              cep: '30610628',
              email: 'empresacoletora2@email.com',
              telefone: '31992534761',
              materiais: ['Pilhas', 'Baterias', 'Computadores'],
      
      
      },
              {
              empresa: 'Empresa 3',
              endereco: 'Rua Cerejeira',
              cep: '37045025',
              email: 'empresacoletora3@email.com',
              telefone: '31986538215',
              materiais: ['Pilhas', 'Baterias', 'Telefones', 'Celulares'],
      
      
      },
              {
              empresa: 'Empresa 4',
              endereco: 'Rua Peregrino Varela',
              cep: '35931462',
              email: 'empresacoletora4@email.com',
              telefone: '31999075679',
              materiais: ['Aparelhos eletrônicos domésticos', 'Computadores', 'Celulares'],
          },
            
      ] 
      };
      
      
      if(!empresas) {
          dbEmpresas = data_empresas;
          localStorage.setItem('dbEmpresas', JSON.stringify(data_empresas));
      } else {
          dbEmpresas = JSON.parse(empresas);
      }
      
        function registroEmpresas () {
                  dbEmpresas.empresas.shift();
                  dbEmpresas.empresas.splice(0, 0, {empresa: empresa, email: email, endereco: endereco, cep: cep, telefone: telefone, materiais: materiais});
                  localStorage.setItem('dbEmpresas', JSON.stringify(dbEmpresas));
                  container[0].innerHTML = `<div class="alert alert-success" role="alert">
                  Empresa registrada com sucesso!
                </div>`;
                setTimeout(() => {
                  window.location.href = "descarte.html";
                }, 2000);
              
              
      }
      if(baterias === false && telefones === false && computadores === false && domesticos === false){
        container[0].innerHTML = `<div class="alert alert-danger" role="alert">
        Selecione pelo menos um material para descarte!
      </div>`;
      } else {
      registroEmpresas();
      }
      getPerfil();
    }
  }
}
