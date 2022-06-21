function pesquisar() {
    let input, filtro, empresa, card, p, i, txtValue, resultados;
    input = document.getElementById('pesquisa');
    filtro = input.value.toUpperCase();
    empresa = document.querySelector(".empresa");
    resultados = document.querySelector(".resultados");
    card = empresa.querySelectorAll('.card');
  
    for (i = 0; i < card.length; i++) {
      p = card[i].getElementsByTagName("p")[2];
      txtValue = p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filtro) > -1) {
        card[i].style.display = "";
      } else {
        card[i].style.display = "none";
    }
    }
  }