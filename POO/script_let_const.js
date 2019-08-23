//objeto const 

const jsFramework = 
{
    name: 'Angular'
};

jsFramework.name = 'React';

console.log(jsFramework.name); /* é possível alterar o conteúdo da propriedade name mesmo o objeto sendo constante, 
o que não é possível fazer é fazer outra referência ao objeto :
jsFramework = 
{
    name: 'Vue'
};

 desse jeito apresentaria erro
*/

