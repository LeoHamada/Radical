var botao1 = document.getElementById('botao1')

botao1.addEventListener("click",function (e) {
    const x1 = document.getElementById('valorx1')
    const raiz = x1.value
    const res = document.getElementById('resultado')

    e.preventDefault();
    if (raiz === '') {
        window.alert('[erro] verifique os valores e tente novamente')
    } else {
        var resultado = 0;
        resultado= Math.sqrt(raiz)
        res.innerHTML = resultado
    
    }
    
})
var botao2 = document.getElementById('botao2')

botao2.addEventListener('click',function(e) {
    const x2 = document.getElementById('x2')
    const raiz2 = x2.value
    const y1 = document.getElementById('y1')
    const indice = y1.value
    const res2 = document.getElementById('resultado2')


    e.preventDefault();
    if (raiz2 == '') {
        window.alert('[erro] verifique os valores e tente novamente')
    }else {
        if(indice == "") {
            window.alert('[erro] verifique os valores e tente novamente')
        }else {
            var resultado2 = 0;
            resultado2 = Math.pow(raiz2,1/indice)
            res2.innerHTML = resultado2
        }
        
    }
})
