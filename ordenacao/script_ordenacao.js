//Ordenando elementos

let numbers = [];

for(let i = 0; i<15;i++)
    numbers[i] = i+1; 

//inverter a ordem dos elementos 

numbers.reverse();
console.log("Reverse: " + numbers);

//método sort 

numbers.sort();//ordena lexograficamente e entende que todos são strings 
console.log("Sort: " + numbers); //saída [1,10,11,12,13,14,15,2,3,4,5,6,7,8,9]

//função para ordenação 

numbers.sort((a,b) => a-b); //explicação comment abaixo do console.log ¹
console.log("Sort + parametros + condicao: " + numbers);

/*¹Esse código devolve um número negativo se b for maior que a, um número positivo se a for maior que b 
e 0(zero) se forem iguais. Isso significa que, se um valor negativo for devolvido, é sinal de que a é 
menor que b, o que será usado posteriormente pela função sort para organizar os elementos  */

//o mesmo código acima de outra forma
//compareFunction 

function compare(a, b)
{
    if(a<b)
        return-1;
    
    if(a>b)
        return 1;
    
    return 0;//se a for igual a b; 
}

numbers.sort(compare);
console.log("Sort + funcao: " + numbers);

//ordenação personalizada 

const friends = [
    {
        name: 'John', 
        age: 30
    },

    {
        name: 'Ana', 
        age: 20
    },

    {
        name: 'Chris', 
        age: 25 
    },//vírgula no final: ES2017
]; 

function comparePerson(a,b)
{
    if(a.age < b.age)
        return -1; 
    
    if(a.age > b.age)
        return 1; 

    return 0;
}

console.log(friends.sort(comparePerson)); //{ name: "Ana", age: 20 }, { name: "Chris", age: 25 } e { name: "John", age: 30 }

//ordenando strings 


let names = ['Ana', 'ana', 'john', 'John'];
console.log("Names: " + names.sort()); // [Ana,John,ana,john] 

/*A saída é desse modo e não [ana, Ana, john, John] porque o JS utiliza para comparação o valor dos caracteres de acordo
com a tabela ASCII e A:65, J:74, a:97 e j:106 */ 

//outra comparação 
names = ['Ana', 'ana', 'john', 'John'];

console.log("Names2: " + names.sort((a,b)=>
{
    if(a.toLowerCase() < b.toLowerCase())
        return -1; 
    
    if(a.toLowerCase() < b.toLowerCase())
        return 1;
    
    return 0;
})); //[Ana,ana,john,John]; 

//minúsculas primeiro 

console.log("Names3: " + names.sort((a,b) => a.localeCompare(b))); 


//palavras com acento 

const names2 = ['Maève', 'Maeve'];

console.log(names2.sort((a,b) => a.localeCompare(b))); //[ "Maeve", "Maève" ]