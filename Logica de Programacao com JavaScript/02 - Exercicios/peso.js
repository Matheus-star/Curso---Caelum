

alert ("vamos calcular seu peso");

let peso = parseFloat(prompt ("digite seu peso ").replace(",","."));

let altura  = parseFloat(prompt ("digite sua altura").replace(",","."));

let imc = peso / (altura * altura);

alert (imc.toFixed(2).replace(".",",")); //toFixed 