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
console.log("1: " + numbers);
// inserindo elementos no final do array

//modo 1
numbers[numbers.length] = 10;

//modo 2 - utilizando método push 

numbers.push(11);
console.log("2: " +numbers);
numbers.push(12, 13);
console.log("3: " +numbers);

//inserindo um elemento na primeira posição 
 
// modo 1
Array.prototype.insertFirstPosition = function(value)
{
    for(let i = this.length; i>=0; i--) //this faz referência ao array que será associado ao método insertFirstPosition
        this[i] = this[i -1];  //passa os elementos da esquerda para a direita 
    this[0] = value; //a primeira posição recebe o valor atribuído na função 
}

numbers.insertFirstPosition(-1); 
console.log("4: " + numbers);

//modo 2 - unshift 

numbers.unshift(-2);
console.log("5: " + numbers);
numbers.unshift(-4,-3);
console.log("6: " + numbers);

//Remoção de elementos 

//Removento elemento no final do array com o método pop

numbers.pop(); 
console.log("7: "+ numbers);

//removendo elemento no início do array

// modo 1 

for(let i = 0; i < numbers.length; i++)
    numbers[i] = numbers[i+1];//envia o primeiro elemento pro "nada" e empurra os elementos para a esquerda, mas, ainda mantendo o tamanho do array

 console.log("8: " + numbers);
 
 //modo 2 

 Array.prototype.reIndex = function(myArray)  //função para reordenar o array
 {
     const newArray = []; //cria um novo array 
     for(let i = 0; i < myArray.length; i++)
     {
         if(myArray[i] !== undefined)
            newArray[i] = myArray[i];//passa os valores de um array para o novo criado.
     }
    
     return newArray;
 }

 Array.prototype.removeFirstPosition = function() 
 {
    for(let i = 0; i<this.length; i++)
        this[i] = this[i+1];

    return this.reIndex(this);
 };
 
 numbers = numbers.removeFirstPosition();
 console.log("9: " + numbers); 

 //modo 3 - método shift 

 numbers.shift();

 console.log("10: " + numbers);

 //adição de um elemento em uma posição específica 

 numbers.splice(5,3); //remove 3 elementos a partir da posição 5 no array - splice(1º posição do array, 2º quantidade de elementos)
 console.log("11: "+ numbers);
 
 numbers.splice(5,0,4,5,6);// insere 3 elementos a partir da 5 do array (2º == 0, ou seja não remove, 3ª posição em diante são os elementos adcs).
 console.log("12: "+ numbers);
 
 numbers.splice(5,3,4,5,6); // faz o mesmo que os dois anteriores, remove 3 elementos e adc 3 elementos tbm, a partir da p5 do array.
 console.log("13: "+ numbers);