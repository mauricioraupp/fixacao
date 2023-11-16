function listarDados(request, response) {
    response.send('listar produtos');
}

function cadastrarDados(request, response) {
    response.send('cadastrar produto');
}

function editarDados(request, response) {
    response.send('editar produto');
}

function deletarDados(request, response) {
    response.send('deletar produto');
}

module.exports = {
    listarDados,
    cadastrarDados, 
    editarDados, 
    deletarDados
}