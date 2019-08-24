 // funções com valores default 

function sum(x = 1, y = 2, z = 3)
{
    return x + y + z;
}
console.log(sum(4,2)); // exibe 9, os valores de x e y são substituídos e z permanece

