// mostrar o nome do mês com base no número do mês

const nomemeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
]

const mes = prompt("Informe o mês")
const numeromes = Number(mes)

let = mensagem = "Mês Inválido"

if ((numeromes != NaN) && (numeromes > 0) && (numeromes <= 12)) {
    mensagem = `${nomemeses[numeromes - 1]} é o mês de número ${numeromes}` 
}
else {
    for (let index = 0; index < nomemeses.length; index++) {
        if (mes.toLowerCase() === nomemeses[index].toLowerCase()) {
            mensagem = `${mes} é o mês de número ${index + 1}`
            break
        }
    }
}

console.log(mensagem)
    

