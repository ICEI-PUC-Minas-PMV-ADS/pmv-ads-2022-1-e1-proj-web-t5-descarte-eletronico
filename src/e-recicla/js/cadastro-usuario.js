function init() {
    carregarDados();

    $("#botao-salvar").click(function () {

        if (!$('#form-contato')[0].checkValidity()) {
            return;
        }

        let campNome = $("#inputNome").val();
        let campEmail = $("#inputEmail").val();
        let campCidade = $("#inputCidade").val();
        let campTelefone = $("#inputTelefone").val();
        let campSenha = $("#inputSenha").val();
        let campConfsenha = $("#inputConfSenha").val();

        if (campSenha !== campConfsenha) {
            $("#inputConfSenha").get(0).setCustomValidity('As senhas inseridas devem ser iguais');

            return;
        }

        let contato = {
            nome: campNome,
            telefone: campTelefone,
            email: campEmail,
            cidade: campCidade,
            senha: campSenha,
        };

        cadastrarContato(contato);
    });
}

function cadastrarContato(contato) {
    let novoId = 1;

    if (db != null && db.data.length != 0) {
        let ultimaPosicao = db.data.length - 1;
        novoId = db.data[ultimaPosicao].id + 1;
    }

    contato.id = novoId;

    cadastraUsuarioDb(contato);
    salvaUsuarioLogado(contato);

    carregarDados();
}

function carregarDados() {
    carregaListaUsuarios();

    if (db != null) {
        // Remove todas as linhas do corpo da tabela
        $("#table-contatos").html("");

        // Popula a tabela com os registros do banco de dados
        for (let i = 0; i < db.data.length; i++) {
            let contato = db.data[i];

            $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td>
                                            <td>${contato.nome}</td>
                                            <td>${contato.telefone}</td>
                                            <td>${contato.email}</td>
                                            <td>${contato.cidade}</td>
                                        </tr>`);
        }
    }
}

function limpaValidacao() {
    $("#inputConfSenha").get(0).setCustomValidity('');
}