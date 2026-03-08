// PÁGINA DADOS DO ALUNO
'use strict'

const params = new URLSearchParams(window.location.search)
const idAluno = params.get('id')

async function buscarAlunos() {
    const url = 'https://lion-school-phbo.onrender.com/alunos'
    const response = await fetch(url)
    const alunos = await response.json()

    return alunos
}

async function mostrarAluno() {
    const alunos = await buscarAlunos()
    const aluno = alunos.find(aluno => aluno.id == idAluno)

    const container = document.getElementById('container')

    const infoAlunos = document.getElementById('infoAluno')
    const notasAluno = document.getElementById('notasAluno')

    container.appendChild(infoAlunos)
    container.appendChild(notasAluno)

    const img = document.createElement('img')
    img.src = aluno.foto
    img.alt = aluno.nome
    img.className = 'fotoAluno'

    const nome = document.createElement('p')
    nome.textContent = aluno.nome
    nome.className = 'nomeAluno'

    infoAlunos.appendChild(img)
    infoAlunos.appendChild(nome)

    const listaNotas = document.createElement('ul')

    aluno.desempenho.forEach(nota => {
        const disciplina = document.createElement('li')
        disciplina.textContent = `${nota.categoria}: ${nota.valor}`

        listaNotas.appendChild(disciplina)
    })

    container.appendChild(listaNotas)

}

function voltarPagina() {
    const botaoSair = document.getElementById('botaoSair')

    botaoSair.addEventListener('click', () => {
        window.location.href = './indexAlunos.html'
    })
}

mostrarAluno()
voltarPagina()