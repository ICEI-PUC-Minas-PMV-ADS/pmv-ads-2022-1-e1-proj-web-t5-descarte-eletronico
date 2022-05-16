var db = {};
var usuarioLogado = {};

function carregaListaUsuarios() {
    let dbTexto = localStorage.getItem("db_contato");
    db = JSON.parse(dbTexto);
}

function carregaUsuarioLogado() {
    let usuarioTexto = localStorage.getItem("usuario");
    usuarioLogado = JSON.parse(usuarioTexto);
}

function cadastraUsuarioDb(usuario) {
    if (db == null) {
        db = {
            data: []
        };
    }

    db.data.push(usuario);
    salvaListaUsuarios();
}

function salvaUsuarioLogado(usuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
}

function salvaListaUsuarios() {
    localStorage.setItem("db_contato", JSON.stringify(db));
}

function editaUsuario(email, usuario) {
    // busco o usuario por email e pego a posicao dele no array ( lista )
    let usuarioEncontrado = -1;

    for (let i = 0; i < db.data.length; i++) {
        let usuario = db.data[i];

        if (email === usuario.email) {
            usuarioEncontrado = i;
        }
    }

    // Se usuario foi encontrado
    if (usuarioEncontrado !== -1) {

        // altera os dados do usuario
        db.data[usuarioEncontrado].nome = usuario.nome;
        db.data[usuarioEncontrado].telefone= usuario.telefone;
        db.data[usuarioEncontrado].cep = usuario.cep;
        db.data[usuarioEncontrado].endereco = usuario.endereco;
        db.data[usuarioEncontrado].cidade = usuario.cidade;

        salvaListaUsuarios();
    }
}

function editaUsuarioLogado(usuario) {
    usuarioLogado.nome = usuario.nome;
    usuarioLogado.telefone= usuario.telefone;
    usuarioLogado.cep = usuario.cep;
    usuarioLogado.endereco = usuario.endereco;
    usuarioLogado.cidade = usuario.cidade;

    salvaUsuarioLogado(usuarioLogado);
}