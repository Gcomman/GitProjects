function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'Fotos/foto_manha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Now it is ${hora}:${minuto} am`
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'Fotos/foto_tarde.png'
        document.body.style.background = '#ca6217'
        msg.innerHTML = `Now it is ${hora}:${minuto} pm`
    } else {
        //Boa noite
        img.src = 'Fotos/foto_noite.png'
        document.body.style.background = '#755566'
        msg.innerHTML = `Now it is ${hora}:${minuto} pm`
    }
}