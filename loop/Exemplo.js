// //For - loop contato //

// //contador do 0 ao 10//
// //for (inicializador; condição; contador)

// //for(let num = 0; num <= 10; num++){
//     console.log("Eu vim barganhar" + num)
// //}

// //While - loop condicion
// //let salario = 1000//

// //while(salario < 5000){
//     //salario = 100 + salario//
//     //salario += 100

//     //console.log ("O salario é de R$: " + salario)
// //}

// //Do while - loop condicional
// let aumento = 1000

// do {
//     console.log("Esse é o seu saldo: " + aumento)
//     aumento += 100
// } while (aumento < 5000)

//Array
let frutas = ["Banana", "Laranja", "Maça", "Pytaia", "Melancia", "Uva"]

// console.log (frutas[3])
// console.log(frutas[5])
 
//forEach => percorre uma lista
frutas.forEach(fruta => {
    console.log("A fruta é: " + fruta)
})

//Percorrer uma lista com for
for (let indice = 0; indice < frutas.length; indice ++){
    console.log(frutas [indice])

    if(frutas[indice] == "Uva"){
        console.log("Eu gosto de " + frutas [indice])
    }
    }