// 1. Faça um código que leia a lista de 5 números e informe o maior número.

// 2. Faça um código que leia a lista de 5 números e informe a soma e a média dos números. 

// 3. Faça um código que receba dois números inteiros e gere os números inteiros que estão no 
// intervalo compreendido por eles.

// 4. Altere o programa anterior para mostrar no final a soma dos números.

// 5. Desenvolva um código de gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
// Crie uma variável que receberá um número inteiro de 1 a 10 e 
// a impressão no console.log deve ser conforme o exemplo abaixo:
// Tabuada de 5:
// 5 X 1 = 5
// 5 X 2 = 10
// ...
// 5 X 10 = 50

// 6. Dado a seguinte lista:
// ["uno", "hb20", "civic"]
// Adicione mais dois modelos de carros nessa lista (método .push) 
// e imprima a nova lista no console.log.

// 7. Dado a seguinte lista:
// ["laranja", "maçã", "limão", "uva", "melancia"]
// imprima no console:
// - a quantidade de itens dentro desse array (método .length)
// - o valor da posição 3
// - o valor que tem maior caracteres (iteração e método .length)

// 8. Faça um código valide se os nomes dentro de uma lista tem mais de 4 caracteres ou não:
// Se tiver 4 caracteres ou mais imprima "Nome grande", se não tiver, imprima "Nome pequeno".
// Dica: Crie uma variável que armazene uma lista do tipo string com nomes e 
// imprima no console.log se esses nomes tem 4 caracteres ou mais, ou não
// usando o método .length (nome.length)

//1
/*
let Lista = [20, 10, 80, 41, 50]
let Maior_numero = 0
for (let a = 0; a < Lista.length; a++) {

    console.log("O valor da posição " + a + " é " + Lista[a]);
    if (Lista[a] > Maior_numero) {

        Maior_numero = Lista[a]

    }

}
console.log("O maior numero é " + Maior_numero);
*/

//2
/*
let lista = [10, 10, 10, 10, 10]
let soma = 0

for (let b = 0; b < lista.length; b++) {

    soma = soma + lista[b]
    
}
console.log(soma)
console.log("A média das notas é de " + soma / lista.length);
*/

//3 e 4
/*
let c = 10
let d = 20
let Lista_1 = []
let Soma = 0

for (let e = c + 1; e < d; e++) {

    Lista_1.push(e)
    
}
for(let z of Lista_1) {

   Soma += z

}
console.log(Lista_1)
console.log(Soma)
console.log(c)
*/
//5
/*
let numero = 2
let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let calculo = 0

for (let f = 0; f < tabuada.length; f++) {

    calculo = numero * tabuada[f]
    console.log(`${numero} x ${tabuada[f]} = ${calculo}`);
    
}
*/
//6
/*
let Lista_de_carros = ["uno", "hb20", "civic"]

console.log(Lista_de_carros);

Lista_de_carros.push("fit", "celta")

console.log(Lista_de_carros);
*/
//7
/*
let Lista_de_frutas = ["laranja", "maçã", "limão", "uva", "melancia"]
let Maior_fruta = ""

console.log("A quantidade de itens nessa lista é " + Lista_de_frutas.length);

for (let h = 0; h < Lista_de_frutas.length; h++) {

    if (Lista_de_frutas[h].length > Maior_fruta.length) {
        Maior_fruta = Lista_de_frutas[h]
    }

}
console.log("A fruta com o maior nome é " + Maior_fruta);
console.log("E o terceiro item na lista é " + Lista_de_frutas[2]);

*/
//8
/*
let Lista_de_nomes = ["Diogo", "Thiago", "Laressa", "Rodrigo", "Marina", "Ana"]

for (let i = 0; i < Lista_de_nomes.length; i++) {

    let nome = Lista_de_nomes[i]

    if (nome.length >= 4) {

        console.log(nome + " é um nome grande");

    } else if (nome.length < 4) {
        console.log(nome + " é um nome pequeno");
    }

}
*/