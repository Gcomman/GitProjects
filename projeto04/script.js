function calcular() {
    let multiplicador = window.document.getElementById('multiplicador')
    let res = window.document.getElementById('res_multiplicador')

    // Função que irá calcular a tabuada

    // let numero = 3
    // let res;

    let numero = Number(multiplicador.value)
    let resultado = Number(res.value)

    for (m = 1; m <= 10; m++) {
        resultado = numero * m
            // console.log(`${numero}X${m} = ${res}`)
        res_multiplicador.innerHTML += `${numero}X${m} = ${resultado}<br>`
    }

}

function apagar() {
    window.location.reload()
}