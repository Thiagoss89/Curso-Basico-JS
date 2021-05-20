function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = "Agora são " + hora + " horas"
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'foto_manha.jpg'
        document.body.style.background = '#e8d560'
    }else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'foto_tarde.jpg'
        document.body.style.background = '#f0974c'
    }else {
        // Boa noite
        img.src = 'foto_noite.jpg'
        document.body.style.background = '#31445c'
    }
}


