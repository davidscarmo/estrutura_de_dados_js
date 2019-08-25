// desestruturação de array 

let [x,y] = ['a', 'b'];

/* 
O código acima é o mesmo que: 
let x = 'a' 
let y = 'b'
*/ 

//swap = troca de valores entre as variáveis 

[x,y] = [y,x]; 

/* 
    pra fazer o swap sem a desestruturação seria assim: 
    var = temp = x; 
    x = y; 
    y = temp;
*/

//abreviação de propriedades (property shorthand)

let [a,b] = ['x', 'y']; 
let obj = {a,b};
console.log(obj); // Object { a: "x", b: "y" }

//o código anterior seria o mesmo que: 

var a1 = 'x';
var b1 = 'y';
var obj2 = {a1:'x', b1: 'y'}; 
console.log(obj2); //  Object { a1: "x", b1: "y" }

//nomes de métodos abreviados

const hello = 
{
    name: 'David',
    printHello()
    {
        console.log('Hello!');
    }
};

console.log(hello.printHello());

// o código acima ainda pode ser escrito assim

var hello2 = 
{
    name: 'David',
    printHello: function printHello()
    {
        console.log('Hello 2!');
    }
};

console.log(hello2.printHello());