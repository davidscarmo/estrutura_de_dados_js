//tipagem de array 

let length = 5; 
let int16 = new Int16Array(length); //tabela com a tipagem no livro, pg 105 
let array16 = [];
array16.length = length; 

for(let i= 0; i<length; i++)
    int16[i] = i+1; 

console.log(int16); 

