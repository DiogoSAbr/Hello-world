/*
let a = 0

while (a < 100) {

    console.log("O valor de a é " + a);

    a = a + 1

    if (a == 20) {

        break

    }
}
*/
/*
for(let b = 50; b <= 50; b = b + 2) {
    
    console.log("O valor de b é " + b);

}

let a = 0

 do {

    console.log("O valor de a é " + a);

    a = a + 1

    if (a == 20) {

        break

    }
} while (a < 100)
*/


let Lista = [1,3,9,10,6,17,4,70,14,27,140,19,87]
let Lista_1 = []
let Maior_numero = 0
for(let ç = 0;ç < Lista.length;ç++) {
 
    console.log("O valor da posição " + ç + " é " + Lista[ç]);
    if (Lista[ç] > Maior_numero) {
        Maior_numero = Lista[ç]
    }

    Lista_1.push(Lista[ç]*2);
}
console.log(Maior_numero);
console.log(Lista_1);