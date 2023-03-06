
let alturaMetros = parseFloat(prompt('Digite sua altura em metros, EX: 1.78'))

let pesoKilos = parseFloat(prompt('Informe seu peso em kilogramas, EX: 85'))

let imc = pesoKilos / (alturaMetros * alturaMetros)

document.write('Seu imc é: ' , imc , '<br>' )

if(imc > 40){
    document.write('-Obesidade grau III')
    document.write('<img src="images/Vermelho.png" alt="">')
}

else if(imc <=40 && imc >=35){
        document.write('-Obesidade grau II ')
        document.write('<img src="images/Amarelo.jpg" alt="">')

}

else if(imc <=34.9 && imc >=30){
    document.write('-Obesidade grau I ')
    document.write('<img src="images/amareloClaro.png" alt="">')

}

else if(imc <=29.9 && imc >=25){
    document.write('-Acima do peso ')
    document.write('<img src="images/VermelhoP.jpg" alt="">')

}

else if(imc <=24.9 && imc >=18.5){
    document.write('-Peso normal ')
    document.write('<img src="images/VERDE.png" alt="">')

}

else if(imc <=18.4 && imc >=17){
    document.write('-Abaixo do peso ')
    document.write('<img src="images/verdeClaro.jpg" alt="">')

}
else{
    document.write('-Muito abaixo do peso, procure um médico')
    document.write('<img src="images/branco.png" alt="">')
    
}