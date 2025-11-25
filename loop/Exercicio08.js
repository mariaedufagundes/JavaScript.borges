let idade = parseInt(prompt("Digite sua idade:"))

while(idade < 18){
    idade = parseInt(prompt("Sua idade não corresponde a indicada, digite outra!"))

}

console.log ("Você é maior de idade. sua idade é: " + idade)