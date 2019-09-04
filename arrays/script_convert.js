//Métodos para converter array para string 

//array utilizado na conversão 
let numbers = [];
for(let i = 0; i<15;i++)
    numbers[i] = i+1;

//toString 
console.log(numbers.toString()); //converte para string - 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

//join 
const numbersString = numbers.join('-'); //join faz a mesma coisa que o toString,mas permite escolher o separador - join('separador');

console.log(numbersString);//saída 1-2-3-4-5-6-7-8-9-10-11-12-13-14-15
