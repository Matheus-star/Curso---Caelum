// Calcula IMC adultos
function calculaIMCAdultos(peso, altura) {
    let imc = peso / (altura * altura)

    // Determinar a faixa do imc calculado
    let frase
    if (imc < 17) {
        frase = "Muito abaixo do peso"
    } else if (imc >= 17 && imc <= 18.49) {
        frase = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.99) {
        frase = "Peso normal"
    } else if (imc >= 25.0 && imc <= 29.99) {
        frase = "Acima do peso"
    } else if (imc >= 30.0 && imc <= 34.99) {
        frase = "Obesidade I"
    } else if (imc >= 35.0 && imc <= 39.99) {
        frase = "Obesidade II (severa)"
    } else {
        frase = "Obesidade III (mórbida)"
    }

    // Exibir resultado (saída)
    mostra(`
        <hr>
        Seu IMC é: ${formataFloatBrasil(imc)}
        <br>
        Você está na faixa: ${frase}
        `)
}
