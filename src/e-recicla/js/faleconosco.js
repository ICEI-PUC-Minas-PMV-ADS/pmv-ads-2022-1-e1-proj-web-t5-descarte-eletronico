$("#botao-enviar").click(function (event) {
    
    if (!$('#form-faleconosco')[0].checkValidity()) {
        return;
    }

    event.preventDefault();

    Swal.fire(
        'Mensagem Enviada.',
        'Em breve entraremos em contato',
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