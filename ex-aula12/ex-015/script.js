function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas!`

if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = 'fotomanha.png'
    document.body.style.background = '#eac6a6'
    document.getElementById('msg').style.color = '#eac6a6'
} else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = 'fototarde.png'
    document.body.style.background = '#77524a'
    document.getElementById('msg').style.color = '#77524a'
} else {
    //Boa noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#03264f'
    document.getElementById('msg').style.color = '#03264f'

}
}

