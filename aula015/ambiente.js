let num = [5, 3, 2, 0, 1]

num.push(9)
num.sort()
console.log(num)
console.log('O vetor tem ' + num.length + ' posições')
console.log('O primeiro vetor é ' + num[0])
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
}else{ 
    console.log('O valor 8 está na posição ' + pos)
}
