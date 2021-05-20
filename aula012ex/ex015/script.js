function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res') // mais moderno que a opção comentada acima
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
             genero = 'Homem'
             if (idade >0 && idade < 5) {
                 //Bebe
                 img.setAttribute('src' , 'bebe_masc.jpg')
             }else if (idade < 15) {
                 //criança
                 img.setAttribute('src' , 'crianca_masc.jpg')
             }else if (idade < 25) {
                 //Jovem
                 img.setAttribute('src' , 'jovem_masc.jpg')
             }else if (idade < 50) {
                 //adulto
                 img.setAttribute('src' , 'adulto_masc.jpg')
             }else {
                 //idoso
                 img.setAttribute('src' , 'idoso_masc.jpg')
             }
        } else if (fsex[1].checked){
            genero = 'Mulher' 
            if (idade >0 && idade < 5) {
                //Bebe
                img.setAttribute('src' , 'bebe_fem.jpg')
            }else if (idade < 15) {
                //criança
                img.setAttribute('src' , 'crianca_fem.jpg')
            }else if (idade < 25) {
                //Jovem
                img.setAttribute('src' , 'jovem_fem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'adulto_fem.jpg')
            }else {
                //idoso
                img.setAttribute('src' , 'idoso_fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = "Foi informado genero " + genero + " com " + idade + " anos"
        res.appendChild(img)

    }
}