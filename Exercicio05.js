let number1 = Number.parseFloat(prompt("Digite o  primeiro numero:"))

let number2 = Number.parseFloat(prompt("Digite o segundo numero:"))

let number3 = Number.parseFloat(prompt("Digiten o terceiro numero:"))

if (number1 < number2 && number2 < number3) {
    console.log("Os numeros estão em ordem crescente:", number1, number2, number3)
}

else{
    console.log("Os numeros não estão em ordem crescente")
}