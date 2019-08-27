//Arrays 

//formas de declarar arrays

let daysOfWeek1 = new Array(); //vazio
daysOfWeek2 = new Array(7); // definindo o tamanho
daysOfWeek3 = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'); // declaração já com os elementos

// usar new pra declarar um array não é a melhor prática 

let daysOfWeek4 = []; //array vazio

let daysOfWeek5 = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];


console.log(daysOfWeek3);
console.log(daysOfWeek5);
console.log(daysOfWeek3.length); // tamanho do array

//acessando elementos e iteração em um array

for(let i = 0; i<daysOfWeek3.length; i++)
    console.log((i+1) + ": " + daysOfWeek3[i]);

//fibonacci - descobrir quais são os 20 primeiros número da sequência

const fibonacci = []; 
fibonacci[0] = 1; 
fibonacci[1] = 1; 

for(let i = 2; i < 20; i++)
{
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; 
}
for(let i = 0; i<fibonacci.length; i++)
    console.log(fibonacci[i]); // devido a repetição o 1 da posição 1 e 2 da sequência vai aparecer apenas 1x

console.log(fibonacci); // mostra todos os 20 números em um array

//Acrescentando elementos 

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
// inserindo elementos no final do array

//modo 1
numbers[numbers.length] = 10;

console.log(numbers);
//modo 2 - utilizando método push 

numbers.push(11);
console.log(numbers);
numbers.push(12, 13);
console.log(numbers);