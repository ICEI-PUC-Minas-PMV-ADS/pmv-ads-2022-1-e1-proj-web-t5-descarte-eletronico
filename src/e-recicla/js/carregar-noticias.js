function carregarNoticias () {
    const dbNoticias = localStorage.getItem('dbNoticias');
    const logado = localStorage.getItem('empresaLogado');

    const noticia = JSON.parse(dbNoticias).noticias;
    
    const container = document.querySelector(".container");

    for(let i=0; i<noticia.length; i++){
        container.innerHTML += `<div class="card mb-4" style="width: 18rem; margin-right: 2vw;">
        <div class="card-body">
          <h5 class="card-title">${noticia[i].titulo}</h5>
          <p class="card-text">${noticia[i].texto.substr(0,40)}...</p>
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#noticia${i}">
            Ler notícia
          </button>
          <div class="modal fade" id="noticia${i}" tabindex="-1" aria-labelledby="noticia${i}" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="noticia${i}">${noticia[i].titulo}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p class="modal-text">${noticia[i].texto}</p>
                </div>
                <div class="modal-footer">
                  <p class="data text-muted">${noticia[i].data}</p>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      }
      if(logado === 'true') {
      container.innerHTML += `<button type="button" class="btn btn-success" onclick="window.location.href = 'registro-noticias.html';">Cadastrar notícia</button>`;
      }

    
} 


carregarNoticias();