//Iteração 

//função de iteração 

function isEven(x)
{
    //devolve true se x for múltiplo de 2.
    console.log(x);
    return x%2 === 0 ? true : false; 
}
//função de seta para a função acima const isEven = x => x%2 ===0;

let numbers = [];

//preencher o array  1 ao 15
for( i = 0; i<15;i++)
    numbers[i] = i+1; 


//iterando com o método every 

numbers.every(isEven);//o primeiro número é 1, vai retornar false, o método para até retornar false

numbers.some(isEven);//o oposto da  every, o método para até retornar true

//iterando com forEach 

numbers.forEach(x=>console.log(x%2===0)); //itera todo o array e retorna true ou false 

//map - retorna todo os resultados (true e false)

const MyMap = numbers.map(isEven); //cria um novo array com o resultado da iteração 

console.log(MyMap);

//filter - retorna só os valores que são true
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

//reduce - soma todos os elementos do array 
console.log(numbers.reduce((previous, current) => previous + current)); 

//função fatorial com reduce - não consta no livro 

function fatorial(x)
{
    let fatorial = [];
    for(let i = 0; i <x; i++)
        fatorial [i] = i+1;

    return console.log("Fatorial de " + x + " é: " + fatorial.reduce((previous, current) => previous * current ));
        
}

fatorial(6);

//método laço for...of 

for(const n of numbers)
    console.log(n%2===0 ? 'even' : 'odd');

//objeto @@iterator 

let iterator = numbers[Symbol.iterator](); 

//individual
console.log("Iterator: " + iterator.next().value); //1
console.log("Iterator: " + iterator.next().value); //2
console.log("Iterator: " + iterator.next().value); //3
console.log("Iterator: " + iterator.next().value); //4
console.log("Iterator: " + iterator.next().value); //5

//usando for...of 

iterator = numbers[Symbol.iterator](); 
for(const n of iterator)
    console.log(n);

//entries, keys e values de array 

//entries 

let aEntries = numbers.entries();//obtém um iterador de chave/valor 
console.log(aEntries.next().value); // [0,1] [posição, valor]
console.log(aEntries.next().value); //[1,2]
console.log(aEntries.next().value);// [2,3]

//keys 
const aKeys = numbers.keys(); //obtém um iterador de chaves
console.log(aKeys.next()); //{ value: 0, done: false } [chave, informa se acabaram os valores para iteração {undefined, done:true}]
console.log(aKeys.next()); // { value: 1, done: false }
console.log(aKeys.next()); // { value: 2, done: false }

//values 
const aValues = numbers.values();// valores do array 
console.log(aValues.next()); //  { value: 1, done: false }[valor, informa se acabaram os valores para iteração {undefined, done:true}]
console.log(aValues.next()); // { value: 2, done: false }
console.log(aValues.next());// { value: 3, done: false }