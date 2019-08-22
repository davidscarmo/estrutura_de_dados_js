//funções

//função básica

function sayHello()
{
    console.log('Hello');
}

//executar a função

sayHello();

//função com argumentos

function output(text)
{
    console.log(text);
}

//executar a função 
output('Hello');

//pode ser usado mais de um argumento, mas (com o exemplo atual) só um será usado pela função o restante ignorado

output('Hello', 'world', 'js é maravilhoso');// saída 'Hello', para que os outros tbm fosse usados seria preciso ter mais de um argumento

//funções podem retornar valor

function sum(num1, num2)
{
    return num1 + num2;
}

//utilizando a função acima

var result = sum(1,2); // valores para num1 e num2
output(result);