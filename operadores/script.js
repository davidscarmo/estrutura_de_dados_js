/* Operadores de Atribuição e Aritméticos */ 

var num = 0; // atribuição  
num = num + 2; // adição
num = num * 3; // multiplicação 
num = num / 2; // divisão
num++; // incrimento
num--; //decremento 
num += 1; // atribuição de soma
num -= 2; // atribuição de subtração
num *= 3; // atribuição de multiplicação 
num /= 2; // atribuição de divisão
num %= 3; // atribuição de resto de divisão


// operadores de atribuição 

console.log("---------------inicio - operador de atribuição ---------------");
console.log('num == 1 : ' + (num == 1)); //igual a 
console.log('num === 1 :' + (num === 1) ); // igual a (tanto valor quanto o tipo de objeto)
console.log('num != 1 ' + (num != 1) ); // diferente de 
console.log('num > 1 :' + (num > 1) ); // maior que
console.log('num < 1 : ' + (num < 1) ); // menor que 
console.log('num >= 1 : ' + (num >= 1) ); // maior ou igual que 
console.log('num <= 1: ' + (num <= 1) ); // menor ou igual que
console.log("---------------Fim - operador de atribuição ---------------");

//operadores lógicos
console.log("---------------inicio - operador lógico ---------------");
console.log('true && true: ' + (true && true)); // e
console.log('true || false: ' + (true || false)); // ou
console.log('!true: ' + (!true)); // negação
console.log("---------------Fim - operador lógico ---------------");

//operadores bit a bit 
console.log("---------------inicio - operador bit a bit ---------------");
console.log('5 & 1: ' + (5 & 5)); // e
console.log('5 | 1: ' + (5 | 1)); // ou
console.log('~5: ' + (~5)); // negação
console.log('5 ^ 1:  ' + (5 ^ 1)); // Ou exclusivo (Xor)  
console.log('5 << 1: ' + (5 << 1)); // deslocamento para a esquerda
console.log('5 >> 1: ' + (5 >> 1)); // deslocamento para a direita
console.log("---------------Fim - operador bit a bit ---------------");

// operador typeof
console.log("---------------inicio - operador typeof ---------------");
console.log('typeof num: ', typeof num); //number
console.log('typeof Packt: ', typeof 'Packt'); //string
console.log('typeof true: ', typeof true); //boolean
console.log('typeof [1,2,3]: ', typeof [1,2,3]);// object 
console.log('typeof {name: John}: ', typeof {name: 'John'}); //object
console.log("---------------Fim - operador typeof ---------------");

//operador delete
console.log("---------------inicio - operador delete ---------------");
var myObj = 
{
    name: 'John', 
    age: 21
};

console.log(myObj); //exibe Object {name: 'John, age:21'}
delete myObj.age;
console.log(myObj); //exibe Object {name: 'John'}

console.log("---------------Fim - operador delete ---------------");