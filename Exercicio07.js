let valor = Number.parseFloat(prompt("Indique o valor da compra: "))

if (valor > 100.01 && valor <=200){
desconto = valor / 10

    console.log("valor total:" , valor - desconto)
}

else if (valor > 200 ) {
desconto = valor / 5

console.log("valor total:" , valor - desconto)
}

else{
    console.log("valor total:" , valor.toFixed(2))
}
