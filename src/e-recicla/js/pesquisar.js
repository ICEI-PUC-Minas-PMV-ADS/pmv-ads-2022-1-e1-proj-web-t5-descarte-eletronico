const pesquisarEmpresa = (event) => {
    event.preventDefault();
    const pesquisa = document.getElementById('pesquisa').value;
    let resultado = ['pilha', 'pilhas', 'bateria', 'baterias', 'telefone', 'telefones', 'celular', 'celulares', 'computador', 'computadores', 'periférico', 'periféricos', 'geladeira', 'microondas', 'televisão', 'tv'];

    if (pesquisa == '') {
        alert('Por favor, preencha o campo de pesquisa corretamente!');
        return;
    }
    else {
        console.log(pesquisa);
        switch (pesquisa.toLowerCase()) {
            case 'pilha':
            case 'pilhas':
            case 'bateria':
            case 'baterias':
                window.location.href = "empresas-materiais/material1.html";
                break;
            case 'telefone':
            case 'telefones':
            case 'celular':
            case 'celulares':
                window.location.href = "empresas-materiais/material2.html";
                break;
            case 'computador':
            case 'computadores':
            case 'periférico':
            case 'periféricos':
                window.location.href = "empresas-materiais/material3.html";
                break;
            case 'geladeira':
            case 'microondas':
            case 'televisão':
            case 'tv':
            case 'fogão':
            case 'rádio':
                window.location.href = "empresas-materiais/material4.html";
                break;
            case 'outro':
            case 'outros':
                window.location.href = "descarte.html";
                break;
            default:
                alert('Material não encontrado!');
                break;

    }
}
}