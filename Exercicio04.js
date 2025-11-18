let nota1 = Number.parseFloat(prompt("Digite a nota de poertuguês"))

let nota2 = Number.parseFloat(prompt("Digite a nota de Matematica"))

let nota3 = Number.parseFloat(prompt("Digite a nota de quimica"))

let nota4 = Number.parseFloat(prompt("Digite a nota de historia"))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    console.log("APROVADO")

}

else if (media >5 && media < 7) {
    console.log(RECUPERAÇÃO)
}

else {
    console.log("REPROVADO")
}