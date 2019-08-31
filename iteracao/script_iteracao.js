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