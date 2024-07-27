
    function funcao(peso,altura){

    let imc = peso / (altura * altura);

    if (imc <= 17){

        alert("Muito abaixo do peso");

    } else if(imc <= 17 && imc <= 18,49){

        alert("Abaixo do Peso");

    } else if( imc >= 18,5 && imc <= 24,99 ){

        alert("peso Normal");

    } else if(imc >= 25 && imc <= 29,99 ){

        alert("Sobrepeso");

    }else if(imc >= 25 && imc <= 29,9 ){

        alert("Obecidade Grau 1");

    }else if(imc >= 25 && imc <= 29,9 ){

        alert("Obecidade Grau 2");

    }else if(imc >= 25 && imc <= 29,9 ){

        alert("Obecidade Grau 3");
    }
    document.write ("Seu imc é: ", peganumero(imc)); //toFixed 
}