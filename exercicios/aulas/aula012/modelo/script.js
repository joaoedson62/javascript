function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagems')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'amanhecer.png'
    }else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'manha.png'
    }else {
        // BOA NOITE!
        img.src = 'noite.png'
    }
}
 