// Operadores de espelhamento e rest 

// function do exemplo anterior
function sum(x = 1, y = 2, z = 3)
{
    return x + y + z;
}

let params = [5,4,5];//são utilizados como parâmetros no console abaixo via (...params)
console.log(sum(...params)); //... é o operador de espalhamento (spread operator)

//códido acima de acordo com o ES5
console.log(sum.apply(undefined, params));


//parâmetros rest 

function restParamaterFunction(x,y,...a)
{
    return (x + y) * a.length; 
}
console.log(restParamaterFunction(1,2,'hello', true, 7)); // saída 9, ...a == 3 


// o código anterior é uma melhoria do abaixo 

function restParamaterFunction(x,y)
{
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}

console.log(restParamaterFunction(1,2,'hello', true, 7 ));