// Fazer um menu de exercícios utilizando os exemplos e
// exercícios feitos em aula.

let opcaoEscolhida = 0

do{
  opcaoEscolhida = parseInt ( prompt(`
    ============MENU DE EXERCÍCIOS=============    
    
    
    Digite um número das opções :

    0 - Sair 
    1 - Login
    2 - IMC
    3 - Par ou Impar
    4 - Média do aulno
    5 - Número Crescente, decrescente e aleatótio

    ===========================================
    `));

switch (opcaoEscolhida) {
    case 0:
        alert("Volte sempre...")
        break;
    case 1:
        login();
        break;
        
        case 2:
            calculoIMC();
            break;
        case 3:
            verificarNumeroImparOuPar();
            break;
        case 4:
            calculoMediaAluno();
            break;
        case 5:
            verificarSequenciaNumero();
            break;
    default:
        alert("Opção inválida! Escolha uma opção que existe no nosso sistema ");
        break;
}

}
while(opcaoEscolhida != 0);

function login(){
    alert("Login realizado com sucesso");
}

function calculoIMC(){
let peso = Number (prompt("Digite seu peso em kg"));
let altura = Number (prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

console.log("Seu IMC é:" + imc.toFixed(2));

let classificacao = "";

if (imc < 18.5){
    classificacao = "abaixo do peso";
}else if (imc <25){
    classificacao = "peso normal";
}else if (imc <30){
classificacao ="sobrepeso";
}else if (imc < 35){
    classificacao = "obesidade grau 1";
}else if (imc <40){
    classificacao = "obesidade grau 2";
}else {
    classificacao = "obesidade grau 3";
}

console.log("classificação: " + classificacao)
}

function verificarNumeroImparOuPar(){
let number = window.prompt ("Numeros par ou impar")

if (number % 2 == 0) {
    console.log ("Ele é par")
}

else 
    console.log ("Ele é impar")
}

function calculoMediaAluno(){
let nota1 = Number.parseFloat(prompt("Digite a nota de português"))

let nota2 = Number.parseFloat(prompt("Digite a nota de historia"))

let nota3 = Number.parseFloat(prompt("Digite a nota de matematica"))

let nota4 = Number.parseFloat(prompt("Digite a nota de geografia"))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7){ 
    console.log("aprovado")
}

else if (media > 5 && media <7){ 
    console.log ("recuperação")
}

else { 
    console.log ("reprovado")
}
}

function verificarSequenciaNumero(){
   let n1= parseFloat(prompt("Digite um numero"))

let n2 = parseFloat(prompt("Digite um numero"))

let n3 = parseFloat(prompt("Digite um numero"))

if (n1 < n2 && n2 < n3) {
    console.log("estão em ordem crescente" + n1 + n2 + n3) 
}

else {
    console.log ("não esta em ordem crescente")
}
}
