/* 
    Em lógica de programação,é muito comum
    trabalharmos com listas de objetos.
    Chamamos essas listas de array
*/

// lista de Compras


let listadecompras = ["Ovos", "leite", "pão de forma"]

console.log ("Item da lista de compras: ", listadecompras[0]);
console.log ("Item da lista de compras: ", listadecompras[1]);
console.log ("Item da lista de compras: ", listadecompras[2]);

// Adicionar um novo item
listadecompras.push("Batata frita");
console.log ("Item da lista de compras: ", listadecompras[3]);

// Como descubrir o tamanho da lista
console.log ("O tamanho de nossa lista é ", listadecompras.length);

// como excluir o último elemento 
console.log ("Tiramos da lista o item Batata-frita : ", listadecompras.pop());

// quero visualizar minha lista
let item = 0;
let total = listadecompras.length;
while (item < total){

    console.log ("Item: ", item,  ":", listadecompras[item] );

    item++
}



// se eu quiser alterar um item especifico da lista 

listadecompras[2] = "queijo";
console.log(listadecompras);

// Para pesquisar um produto

    //Do jeito Raiz
    total = listadecompras.length;
    while (item < total){

        if (listadecompras[item] == "leite") {

            console.log ("A lista de compras tem leite ")
            break
        }

        item++
    }
        

        // Comando funcional do javascript
    if (listadecompras.includes("leite")){

     console.log ("A lista de compras tem leite ")

    }
    // certificar se o item tem leite não foi encontrado
