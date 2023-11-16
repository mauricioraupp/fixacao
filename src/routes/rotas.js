// Importar pacote do express
const { Router } = require('express');
// Instanciar o Router na variavel router
const router = Router();
// Importar funções do controller para a rota acessar as funções
const { 
    listarDados,
    cadastrarDados,
    editarDados,
    deletarDados
 } = require('../controllers/crudController');

router.get('/listar', listarDados);

router.post('/cadastrar', cadastrarDados);

router.put('/atualizar', editarDados);

router.delete('/deletar', deletarDados);

module.exports = router;