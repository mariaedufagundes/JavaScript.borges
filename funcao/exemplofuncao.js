function cumprimento(){
    let NomePessoa = prompt("Digite seu nome: ")

    let horaAtual = new Date().getHours()

    if (horaAtual> 6 && horaAtual < 13){
    alert("Bom dia " + NomePessoa)
}else if (horaAtual >= 13 && horaAtual < 18){
    alert("Boa tarde" +NomePessoa)
}else{
    alert("Boa noite " +NomePessoa)
}
}

cumprimento()

let pessoa = {
    nome: "Arthur",
    idade: 17,
    sobrenome:"Oliveira",
    Estado:"SP",
    Cidade:"SCS"
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.sobrenome)
console.log(pessoa.Estado)
console.log(pessoa.Cidade)