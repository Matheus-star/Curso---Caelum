function fidoso(altura,peso){
    let imc = peso / (altura * altura);

    if (imc <= 22){


        alert("Baixo do peso");

    } else if(imc > 22 && imc <= 27){

        alert("Peso adequado");

    } else {

        alert("Sobrepeso");
    }
}
