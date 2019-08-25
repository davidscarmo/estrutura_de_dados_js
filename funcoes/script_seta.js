//funções de seta

//função normal

var circleAreaES5 = function circleAreaES5(r)
{
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};

console.log(circleAreaES5(2)); 

//função simplificada utilizando seta

const circleArea = r => // >= permite omitir a palavra function
{
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};

console.log(circleArea(3));

//função de 1 linha simplificada

const circleArea2 = r => 3.14 * r * r; 

console.log(circleArea2(4));

//função sem argumentos - 1 linha; 

const hello = () => console.log('Hello!');
hello();
