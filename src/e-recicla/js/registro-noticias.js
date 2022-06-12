let dbNoticias = {};
const noticias = localStorage.getItem('dbNoticias');

const data_noticias = {
    noticias: [
        {
            titulo: 'Noticia 1',
            texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!',
            data: '01/01/2022'

},
        {
            titulo: 'Noticia 2',
            texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!',
            data: '02/02/2022'
},

] 
};


if(!noticias) {
    dbNoticias = data_noticias;
    localStorage.setItem('dbNoticias', JSON.stringify(data_noticias));
} else {
    dbNoticias = JSON.parse(noticias);
}

function registroNoticias (event) {
    event.preventDefault();
    const container = document.getElementsByClassName("login-msg");
    const titulo = document.getElementById("title").value;
    const texto = document.getElementById("text").value;
    const data = document.getElementById("date").value;


        if (titulo === '' || text === '' || data === '') {
            container[0].innerHTML = `<div class="alert alert-danger" role="alert">
            Preencha todos os campos corretamente!
          </div>`;
          }
        
         else{
            dbNoticias.noticias.push({titulo: titulo, texto: texto, data: data});
            localStorage.setItem('dbNoticias', JSON.stringify(dbNoticias));
            container[0].innerHTML = `<div class="alert alert-success" role="alert">
            Notícia registrada com sucesso!
          </div>`;
          setTimeout(() => {
            window.location.href = "noticias.html";
          }, 2000);
        }
} 
