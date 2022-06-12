$("#botao-enviar").click(function (event) {
    
    if (!$('#form-faleconosco')[0].checkValidity()) {
        return;
    }

    event.preventDefault();

    Swal.fire(
        'Mensagem Enviada.',
        'Mensagem enviada com sucesso',
        'success'
    ).then(() => {
        limparCampos();
    });
});

function limparCampos() {
    $("#inputNome").val('');
    $("#inputEmail").val('');
    $("#inputAssunto").val('');
    $("#inputMensagem").text('');
}