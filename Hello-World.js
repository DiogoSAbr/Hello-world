/*let x = 9;
console.log("O valor de x é " + x);
console.log("O tipo de x é " + typeof x);

let y = 9;
console.log("O valor de y é " + y);
console.log("O tipo de y é " + typeof y);

let z = x*y;
console.log("O valor de z é " + z);
console.log("O tipo de z é " + typeof z);

let a = (z-y)/x;
console.log("O valor de a é " + a);
console.log("O tipo de a é " + typeof a);

let w = a*x/y+z;
console.log("O valor de w é " + w);
console.log("O tipo de w é " + typeof w);

let p= (w*y+(a+z)/w)*2;
console.log("O valor de p é " + p);
console.log("O tipo de p é " + typeof p);
*/
/*
console.log("Hello World");
console.log("Diogo teste");
let x=3
console.log(x);
x=7
console.log(x);
console.log(typeof x);
x="qualquer coisa"
console.log(x);
console.log(typeof x);
let y="Teste"
let d=5
console.log(y,typeof y,d,typeof d);
let w=1
console.log(d+w);
let e=d-w
console.log(e);
console.log(y+" "+x);
e=e+10
console.log(e);
*/
//array
/*
let Teste = [1,2,3,"Sim",false]

console.log("O valor de Teste é " + Teste);
console.log("O tipo de Teste é " + typeof Teste);

console.log("O valor de Teste é " + Teste[4]);
console.log("O tipo de Teste é " + typeof Teste[4]);

console.log("O Tamanho de Teste é " + Teste.length);
Teste.push("p")

console.log("O valor de Teste é " + Teste);
console.log("O Tamanho de Teste é " + Teste.length);

let nome = "Diogo"

nome.length
console.log(nome.length);
console.log(nome[3]);
*/
//object
let h = {
    x: 1,
    d: "Teste",
    l: false,
    a: [1, 2, 3, 4],
    o: {
        x: 10
    }
}

console.log(h);
console.log("O tipo de h é " + typeof h);

console.log("O valor de h.x é " + h.x);
console.log("O tipo de h.x é " + typeof h.x);

let pessoa = {
    nome:"Diogo",
    endereço:{
        rua:'Rua Teste',
        numero:482
    },
    profissão:"Programador",
    Idade:15,
    casado:false,
    Animais_de_estimação:[
        {
           especie:'cachorro',
           nome:'Sett'
        },
        {
            especie:'cachorro',
            nome:'Fred'
        },
        {
            especie:'gato',
            nome:'Malu'
        }
    ]
}
console.log(pessoa);
console.log(pessoa.Animais_de_estimação[1].nome);

