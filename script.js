// while
// do/while
// for

// Crie uma lista com 5 nomes usando while
debugger
//enquanto (condição verdadeira) faça alguma coisa
let numerodevezes = 0

while (numerodevezes < 5){
    console.log("Passou aqui!")
    numerodevezes = numerodevezes +1
}

let lista = ['banana', 'maçã', 'kiwi', 'morangos', 'laranja', 'pera']

//cria uma variavel de contador
let posicao = 0

//cria uma lista não ordenada
const listaemtela = document.createElement("ol")

while (posicao < lista.length) {
    console.log(lista[posicao])
    const itemlista = document.createElement("li")
    itemlista.textContent = lista[posicao]
    listaemtela.appendChild(itemlista)
    posicao = posicao + 1
}

document.body.appendChild(listaemtela)