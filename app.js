'use strict'

async function buscarCurso() {
    const url = 'https://lion-school-phbo.onrender.com/cursos'
    const response = await fetch(url)
    const cursos = await response.json()

    return cursos
}

async function selecionarCurso() {
    const container = document.getElementById('container')

    const divDireita = document.getElementById('divDireita')
    const cursos = await buscarCurso()

    cursos.forEach(curso => {
        const botaoCurso = document.createElement('button')
        botaoCurso.className = 'botaoCurso'

        const img = document.createElement('img')
        img.src = `./img/${curso.sigla}-icon.svg`
        img.alt = curso.sigla

        const nomeCurso = document.createElement('p')
        nomeCurso.textContent = curso.sigla

        botaoCurso.appendChild(img)
        botaoCurso.appendChild(nomeCurso)
        divDireita.appendChild(botaoCurso)

        botaoCurso.addEventListener('click', () => {
            mostrarPaginaAlunosCurso(curso.id)
        })

    })

    container.appendChild(divDireita)


}

function mostrarPaginaAlunosCurso(id) {
    window.location.href = `./indexAlunos.html?id=${id}`
}

selecionarCurso()

module.exports = {
    mostrarPaginaAlunosCurso
}