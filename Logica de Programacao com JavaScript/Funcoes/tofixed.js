function fixed(mensagem){

        return parseFloat(mensagem.toFixed(2).replace(".",","));

}
function fixed(numero, qtCasasDecimais = 2){
    return numero.toFixed(qtCasasDecimais).replace(".", ",")
}