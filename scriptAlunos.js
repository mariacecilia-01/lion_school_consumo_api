// PAGINA ALUNOS

async function buscarCurso() {
    const url = 'https://lion-school-phbo.onrender.com/cursos'
    const response = await fetch(url)
    const cursos = await response.json()
    return cursos
}

async function buscarAlunos() {
    const url = 'https://lion-school-phbo.onrender.com/alunos'
    const response = await fetch(url)
    const alunos = await response.json()

    console.log(alunos)

    return alunos
}

async function listaAlunos(){
    const container = document.getElementById('container')

    const containerCards = document.getElementById('containerCards')
    const alunos = await buscarAlunos()

    //nome do curso
    const params = new URLSearchParams(window.location.search)
    const idCurso = params.get('id')

    const cursos = await buscarCurso()
    const curso = cursos.find(curso => curso.id == idCurso)

    const nomeCurso = document.createElement('h1')
    nomeCurso.textContent = curso.nome
    nomeCurso.className = 'nomeCurso'
    
    container.appendChild(nomeCurso)

    alunos
        .filter(aluno => aluno.idCurso == idCurso)
        .forEach(aluno => {
            const cardAluno = document.createElement('div')
            cardAluno.className = 'cardAluno'

            const img = document.createElement('img')
            img.src = `./img/${aluno.foto}`
            img.className = 'fotoAluno'

            const nomeAluno = document.createElement('p')
            nomeAluno.textContent = aluno.nome
            nomeAluno.className = 'nomeAluno'

            cardAluno.appendChild(img)
            cardAluno.appendChild(nomeAluno)
            containerCards.appendChild(cardAluno)
        })

    container.appendChild(containerCards)
}

listaAlunos()