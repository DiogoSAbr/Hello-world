// 1. Faça um código que verifique se uma letra é vogal ou consoante imprimindo no console.log.
/*criar uma variavel que contenha uma letra
se(if) a variavel for =a então console.log("é uma vogal");*/
// 2. Faça um código que verifique duas notas de um aluno. Em seguida ele deve calcular a média 
// do aluno e dar o seguinte resultado via console.log:
//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.

// 3. Faça um código que leia três números inteiros e mostre o maior deles.

// 4. Faça um código que armazene dois números inteiros em duas variáveis. 
// Em seguida, troque o valor das variáveis, invertendo e exibindo via console. log 
// o antes e o depois dessas variáveis.


//1


let letra = "p"

if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
 
    console.log("É uma vogal");

} else {

    console.log("É uma consoante");

}


//2


let a = 10
let b = 8
let r = (a + b)/2

if(r == 10) {

    console.log("Joãozinho foi aprovado com nota máxima");

}else if(r >= 7) {

console.log("Joãozinho foi aprovado");

} else {

    console.log("Joãozinho foi reprovado");

}


//3

let n = 10
let m = 10
let o = 10

if (n > m && n > o) {

    console.log(n + " é o maior numero");

} else if (m > n && m > o) {

    console.log(m + " é o maior numero");

}else if (o > n && o > m) {

    console.log(o + " é o maior numero");

} else {

    console.log("Todos os numeros tem o mesmo valor");

}


//4

let x = 190
let y = 80

console.log("O valor de x é " + x);
console.log("O valor de y é " + y);

let ç = x 
x = y
y = ç

console.log("O novo valor de x é " + x);
console.log("O novo valor de y é " + y);
