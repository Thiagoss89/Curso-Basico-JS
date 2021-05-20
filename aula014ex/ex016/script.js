function calcular(){
    var valorInicio = document.getElementById('txtinicio')
    var valorFim = document.getElementById('txtfim')
    var valorPasso = document.getElementById('txtpasso')
    //var contador = valorInicio
    //var passoTotal = Number(valorFim) - Number(valorInicio)
    var resultado = document.getElementById('res')

    if(valorInicio.value.length == 0 || valorFim.value.length == 0 || valorPasso.value.length == 0){
        resultado.innerHTML = '<b><font color = "red">Impossível contar</font></b>'
        //alert('[Erro] Faltam dados a preencher')
    }else{
        resultado.innerHTML = 'Contando: ' 
        let i = Number(valorInicio.value)
        let f = Number(valorFim.value)
        let p = Number(valorPasso.value)
        if(p <= 0){
            alert(' Passo inválido. Será considerado Passo = 1')
            p = 1
        }
        if (i < f){
            for (let c = i; c <= f; c = c + p){
                resultado.innerHTML += " " + c + '\u{1F463}'
            }
        }else {
            for(let c = i; c >= f; c-= p){
                resultado.innerHTML += " " + c + '\u{1F463}'
            }
        }
        resultado.innerHTML += '\u{1f3c1}'

        
        
    }
}