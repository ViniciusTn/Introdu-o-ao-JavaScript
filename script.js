console.log("Hello World")


//Verificação de Par ou Ímpar:
//Crie uma função chamada verificarPar que receba um número como parâmetro e imprima "Par" ou "Ímpar" dependendo do valor.

let numero = prompt('Digite seu numero');

function verificarpar(numero){

    if(numero % 2 === 0){
        console.log(numero + "é igual a par.");
    }else{
        console.log(numero + "é igual a impar.");

    }

}
 verificarpar(numero);


//Operações Matemáticas Simples:
//Crie uma função chamada calcular que receba dois números e retorne a soma, subtração, multiplicação e divisão desses números.

let numero1 = parseFloat(prompt('Digite seu numero1'));
let numero2 = parseFloat(prompt('Digite seu numero2'))

function calcular(numero1, numero2){
const soma = numero1 + numero2;
const subtração = numero1 - numero2;
const multiplicação= numero1 * numero2;


if(numero2 === 0){
console.log('nao existe divisão por 0');
} else{
    const divisão= numero1 / numero2;
    console.log(divisão)
}


}

calcular(numero1,numero2);



//Laço While para Contagem Regressiva:
//Crie um laço while que imprima os números de 10 até 1 no console, um número por vez.



let n = 10;
while(n >= 1){
    console.log(n);
    n--;
}


//. Manipulação de Strings:
//Crie uma função chamada inverterTexto que receba uma string como parâmetro e retorne essa string invertida. 
//Exemplo: "JavaScript" deve se tornar "tpircSavaJ".



let palavra = prompt("escreva uma palavra");

function inverterTexto (palavra){
    
let letras = palavra.split(" ");
let contrario = letras.reverse();
let junto = contrario.join(" ");
console.log(junto);

}



inverterTexto(palavra);