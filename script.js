let itens = [1,2,3,4,5]
console.log(itens)

itens.unshift('Contagem')
console.log(itens)

itens.pop()
console.log(itens)

itens.push('cinco','seis')
console.log(itens)

itens.shift()
console.log(itens)



let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return a-b
})
console.log(numbers)