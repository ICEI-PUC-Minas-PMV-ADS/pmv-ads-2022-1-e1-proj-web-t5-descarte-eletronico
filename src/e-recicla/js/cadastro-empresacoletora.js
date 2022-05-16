let db = {};

function init() {
    carregarDados();

    $("#botao-prosseguir").click(function () {

        if (!$('#form-contato')[0].checkValidity()) {
            console.log('form invalido');
            return;
        }

        let campNomeCompelto = $("#inputNomeCompleto").val();
        let campEmpresa = $("#inputEmpresa").val();
        let campEmail = $("#inputEmail").val();
        let campTelefone = $("#inputTelefone").val();
        let campSenha = $("#inputSenha").val();
        let campConfsenha = $("#inputConfSenha").val();

        if (campSenha !== campConfsenha) {
            $("#inputConfSenha").get(0).setCustomValidity('As senhas inseridas devem ser iguais');

            return;
        }

        let contato = {
            nomecompelto: campNomeCompelto,
            empresa: campEmpresa,
            email: campEmail,
            telefone: campTelefone,
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

    if (db == null) {
        db = {
            data: []
        };
    }

    db.data.push(contato);

    localStorage.setItem("db_contato", JSON.stringify(db));
    localStorage.setItem("usuario", JSON.stringify(contato));

    carregarDados();
}

function carregarDados() {
    let dbTexto = localStorage.getItem("db_contato");
    db = JSON.parse(dbTexto);

    if (db) {
        // Remove todas as linhas do corpo da tabela
        $("#table-contatos").html("");

        // Popula a tabela com os registros do banco de dados
        for (let i = 0; i < db.data.length; i++) {
            let contato = db.data[i];

            $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td>
                                            <td>${contato.nomecompleto}</td>
                                            <td>${contato.empresa}</td>
                                            <td>${contato.email}</td>
                                            <td>${contato.telefone}</td>
                                        </tr>`);
        }
    }
}

function limpaValidacao() {
    $("#inputConfSenha").get(0).setCustomValidity('');
}