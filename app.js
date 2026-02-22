'use strict'

async function selecionarCurso() {

    const response = await fetch('https://lion-school-phbo.onrender.com/cursos')
    const cursos = await response.json()

    const container = document.getElementById('lista-cursos')
    container.innerHTML = ''

    cursos.forEach(curso => {
        const botaoCurso = document.createElement('button')
        botaoCurso.textContent = curso.nome

        botaoCurso.addEventListener('click',() => {
            window.location.href = `https://lion-school-phbo.onrender.com/cursos/${curso.id}`
        })

        container.appendChild(botaoCurso)
        
    })





}