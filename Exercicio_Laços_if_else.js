// EXERCICIOS LOOP - LAÇOS

// 1. Crie uma variável com valor 0, e crie um laço while que irá iterar enquanto essa variável 
// for menor ou igual a 5. Mostre no console os valores obtidos.
// Dica:
// Para realizar este exercício, crie uma variável n que receberá o valor zero. 
// Crie o laço de repetição while que irá ter a condição n menor ou igual a 5. 
// Coloque a rotina a ser seguida dentro do laço de repetição.

// 2. Crie duas variaveis com valores iniciais igual a 0.
// Crie um laço while que irá iterar enquanto a primeira variável for menor ou igual a 3.
// A cada iteração, o laço incrementa em + 1 essa primeira variável, 
// E adiciona na segunda variável o acumulo (a soma) dos valores iterados da primeira variável.
// Mostre no console os valores obtidos am ambas variáveis.


// EXERCÍCIOS EXTRAS DE IF-ELSE

// 1. Faça um código que tenha um número e exiba via console.log o dia correspondente da semana. 
// (1-Domingo, 2- Segunda, etc.).
// Se digitar outro valor deve aparecer valor inválido no console.log.

// 2. Faça um código que tenha três números inteiros, em seguida mostre o maior e o menor deles.

// 3. Faça um código que leia três números e mostre-os em ordem decrescente. 
// (mostre do maior para o menor, ex. 10, 9, 8)

// 4. Faça um código que tenha uma variável contendo um turno de estudo. 
// Podendo ser "matutino", "vespertino" ou "noturno".
// Imprima via console.log a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.


// **BONUS (usando variáveis e lógica)**
// Conversão de Celsius para Fahrenheit
// Enunciado da questão:
// Você está no Brasil, e para temperatura usamos o grau Celsius.
// Porém, quando você for contrato para trabalhar como programador JavaScript no exterior, deverá usar graus Fahrenheit.

// A fórmula da conversão é a seguinte:
// 32 °F = (°0 C × 9/5) + 32
// Onde 0 graus Celsius vezes 9 divido por 5 mais 32 é igual a 32 graus Fahrenheit
// Desenvolva um código que mostre no console.log o valor XX de graus Celsius em Fahrenheint

//1

let n = 0


while (n <= 5) {

    console.log("O valor de n é " + n);

    n = n + 1

}


//2

let a = 0
let b = 0

while (a <= 3) {

    console.log("O valor de a é " + a);
    console.log("O valor de b é " + b);

    a = a + 1

    b = b + a
}


//exercicios if else

//1

let dia = 3

if (dia == 1) {

    console.log("Domingo");

} else if (dia == 2) {

    console.log("Segunda-feira");

} else if (dia == 3) {

    console.log("Terça-feira")

} else if (dia == 4) {

    console.log("Quarta-feira");

} else if (dia == 5) {

    console.log("Quinta-feira");

} else if (dia == 6) {

    console.log("Sexta-feira");

} else if (dia == 7) {

    console.log("Sábado");

} else {

    console.log("Esse dia é invalido");

}



//2


let x = 20
let y = 10
let z = 2

if (x > y && x > z) {

    console.log(x + " é o maior número");

} else if (y > x && y > z) {

    console.log(y + " é o maior número");

} else if (z > x && z > y) {

    console.log(z + " é o maior número");

} else {

    console.log("Todos os números tem o mesmo valor");

}

if (x < y && x < z) {

    console.log(x + " é o menor número");

} else if (y < x && y < z) {

    console.log(y + " é o maior número");

} else if (z < x && z < y) {

    console.log(z + " é o menor número");

}


//3 


let c = 7
let d = 3
let e = 5

if (c > d && c > e) {

    console.log(c);

    if (e > d) {
        console.log(e);
        console.log(d);
    } else {
        console.log(d);
        console.log(e);
    }

} else if (d > c && d > e) {

    console.log(d);

    if (e > c) {
        console.log(e);
        console.log(c)
    } else {
        console.log(c);
        console.log(e);
    }
} else if (e > c && e > d) {

    console.log(e);

    if (c > d) {
        console.log(c);
        console.log(d);
    } else {
        console.log(d);
        console.log(c);
    }
}
/*
if (c > d && c < e || c < d && c > e) {

    console.log(c);

} else if (d > c && d < e || d < c && d > e) {

    console.log(d);

} else if (e > c && e < d || e < c && e > d) {

    console.log(e);

}

if (c < d && c < e) {

    console.log(c);

} else if (d < c && d < e) {

    console.log(d);

} else if (e < c && e < d) {

    console.log(e);

}
*/

//4


let turno = "noturno"

if (turno == "matutino") {

    console.log("Bom dia!!");

} else if (turno == "vespertino") {

    console.log("Boa tarde!");

} else if (turno == "noturno") {

    console.log("Boa noite!");

} else {

    console.log("Valor invalido");

}



//BONUS

let graus_C = 37
let graus_F = (graus_C * 9 / 5) + 32

console.log("A temperatura em Celsius é de " + graus_C);
console.log("A temperatura em Fahrenheit é de " + graus_F);
