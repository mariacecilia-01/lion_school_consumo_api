/****************************************************
 * Objetivo: Arquivo responsável pelo teste das funções dos arquivos JS.
 * Data: 01/03/2026
 * Autor: Maria Cecilia
 * Versão: 1.0
 */


const retornoCursos = require('../app.js')

// TESTE 01: Validação de dados
test('Deve redirecionar para a página correta com o id', function(){

    delete window.location
    window.location = { href: '' }

    retornoCursos.mostrarPaginaAlunosCurso(2)
    expect(window.location.href).toBe('./indexAlunos.html?id=2')
})
