function contar() {
    //Setando variável para capturar os elementos por ID dentro do HTML
    let iniciar = window.document.getElementById('iniciar')
    let finalizar = window.document.getElementById('finalizar')
    let pular = window.document.getElementById('pular')
    let resultado = window.document.getElementById('resultado')

    if (iniciar.value.length == 0 || finalizar.value.length == 0 || pular.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: <br> '
        let c = Number(iniciar.value)
        let p = Number(finalizar.value)
        let s = Number(pular.value)
        if (s <= 0) {
            window.alert('[ERRO] VALOR DE SALTO INVÁLIDO => PULO = 1')
            s = 1
        }
        if (c < p) {
            do {
                resultado.innerHTML += `${c} \u{1F449}`
                c = c + s
            } while (c <= p)
        } else {
            do {
                resultado.innerHTML += `${c} \u{1F449}`
                c = c - s
            } while (c >= p)

        }
        resultado.innerHTML += `\u{1F3C1}`

    }
}

function resetar() {
    window.location.reload()
}