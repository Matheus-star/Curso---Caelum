

//alert ("vamos calcular seu peso");


//Achar uma forma de ligar a função de forma linkavel


let peso = pegaNumero("Qual seu peso");

let altura  = pegaNumero("Qual a sua Altura");

let imc = peso / (altura * altura);

alert (imc.toFixed(2).replace(".",",")); //toFixed 


