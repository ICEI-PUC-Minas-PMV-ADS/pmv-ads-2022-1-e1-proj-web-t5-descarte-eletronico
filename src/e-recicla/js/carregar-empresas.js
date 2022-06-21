function carregarEmpresas () {
    const dbEmpresas = localStorage.getItem('dbEmpresas');

    const empresa = JSON.parse(dbEmpresas).empresas;

    
    const container = document.querySelector(".empresa");
    
    for(let i=0; i<empresa.length; i++){
        container.innerHTML += `
        <div class="card">
            <h5 class="card-header text-center">${empresa[i].empresa}</h5>
            <div class="card-body">
              <p class="card-text"><strong>Endereço:</strong> ${empresa[i].endereco} - ${empresa[i].cep}</p>
              <p class="card-text"><strong>Contato:</strong> ${empresa[i].email} - ${empresa[i].telefone}</p>
              <p class="card-text"><strong>Materiais aceitos:</strong> ${empresa[i].materiais}</p>
              <a href="mailto:${empresa[i].email}"> <button type="submit" class="btn btn-success btn-sm">Entrar em contato via email</button></a>
            </div>
          </div>
          
          `;

    }
    
} 


carregarEmpresas();
