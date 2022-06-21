const navbar = document.getElementById("collapseNavbar");
if (window.matchMedia("(min-height:800px)").matches && window.matchMedia("(min-width:1400px)").matches) {
    navbar.className="sidebar collapse show collapse-horizontal";
  } else {
    navbar.className="sidebar collapse collapse-horizontal";
}

const botaoLogin = document.querySelector(".login");
const usuarioLogado = localStorage.getItem("usuarioLogado");
const empresaLogado = localStorage.getItem("empresaLogado");
const btnLogout = document.getElementById("btnLogout");

const getUser = localStorage.getItem("usuario");
const getEmpresa = localStorage.getItem("empresa");
const verificarUser = JSON.parse(getUser);
const verificarEmpresa = JSON.parse(getEmpresa);

function checkLogin() {
  if(usuarioLogado === 'true'){
    botaoLogin.innerHTML = `<a href="perfil.html"> <img src="../imgs/usuarioicon.png" width="75" height="75" alt="img perfil" class="rounded-circle" ></a>
    <h4 class="text-white nome mb-2 mt-2">${verificarUser.nome}</h4>`;
  }

  if(empresaLogado === 'true'){
    botaoLogin.innerHTML = `
    <a href="perfil-empresacoletora.html"> <img src="../imgs/empresaicon.png" width="75" height="75" alt="img perfil" class="rounded-circle"></a>
    <h4 class="text-white nome mb-2 mt-2">${verificarEmpresa.empresa}</h4>`;
    const cadastro = document.querySelectorAll("li")[3];
    cadastro.innerHTML = `<a href="perfil-empresacoletora.html" class="nav-link ">
    Editar perfil da empresa
  </a>`;

  }

}
checkLogin();

const logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  localStorage.removeItem("empresaLogado");
});
