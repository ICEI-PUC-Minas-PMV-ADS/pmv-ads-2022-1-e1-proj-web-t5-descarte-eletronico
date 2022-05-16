function init() {
    carregarDados();

    $("#botao-editar").click(function () {

        if (!$('#form-perfil-usuario')[0].checkValidity()) {
            return;
        }

        let campNome = $("#nome").val();
        let campEmail = $("#email").val();
        let campCidade = $("#cidade").val();
        let campTelefone = $("#telefone").val();
        let campEndereco = $("#endereco").val();
        let campCep = $("#cep").val();

        let usuario = {
            nome: campNome,
            telefone: campTelefone,
            cidade: campCidade,
            endereco: campEndereco,
            cep: campCep,
        };

        editaUsuario(campEmail, usuario);
        editaUsuarioLogado(usuario);
    });
}

function carregarDados() {
    carregaUsuarioLogado();
    carregaListaUsuarios();

    if (usuarioLogado != null) {
        $('#nome').val(usuarioLogado.nome);
        $('#cidade').val(usuarioLogado.cidade);
        $('#email').val(usuarioLogado.email);
        $('#telefone').val(usuarioLogado.telefone);
        $('#endereco').val(usuarioLogado.endereco);
        $('#cep').val(usuarioLogado.cep);

    }
}

