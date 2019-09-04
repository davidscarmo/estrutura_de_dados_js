//Métodos de Pesquisa

//array utilizado na pesquisa 
let numbers = [];
for(let i = 0; i<15;i++)
    numbers[i] = i+1;

//indexOf 

console.log(numbers.indexOf(10)); //retorna 9 que é a posição no array do primeiro valor informado encontrado
console.log(numbers.indexOf(100)); // retorna -1, pois não existe o valor 100 em nosso array 

//lastIndexOf

numbers.push(10); 
console.log(numbers.lastIndexOf(10)); // retorna a posição do último valor equivalente ao informado, no caso, 15

numbers.pop();


//find e findeIndex - ES2015 

function multipleOf13(element, index, array)
{
    return (element %13 ==0);
}

console.log(numbers.find(multipleOf13)); //retorna o valor do primeiro valor encontrado de acordo com a função - 13
console.log(numbers.findIndex(multipleOf13));//retorna a posição do primeiro valor encontrado - 12  

//Includes- ES2016 

//retorna verdadeiro se o valor informado for encontrado ou falso se não for encontrado

console.log(numbers.includes(15)); // true
console.log(numbers.includes(20)); // false

//includes - definindo ponto de partida 

let numbers2 = [7,6,5,4,3,2,1];
console.log(numbers2.includes(4,5));//(valor, posição de início), a saída é false, o elemento 4 não existe depois da posição 5 

