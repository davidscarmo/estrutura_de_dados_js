//classe para representar uma pilha 

class Stack{
    constructor()
    {
        this.items = []; //array para a inserção dos elementos da pilha 
    }
    push(element) //adição do elemento na pilha
    {
        this.items.push(element);
    }
    pop() //remoção do elemento na pilha, por se tratar de uma pilha o último elemento adicionado será removido.
    {
        return this.items.pop();
    }
    peek()//visualizar o último elemento adicionado 
    {
        return this.items[this.items.length-1];
    }
    isEmpty()//verificar se a pilha está vazia
    {
        return this.items.length === 0; 
    }
    size() //verificar o tamanho do array 
    {
        return this.items.length; 
    }
    clear()
    {
        this.items = [];
    }
}

//utilizando a classe stack 

//instanciando a classe 

const stack = new Stack();

console.log(stack.isEmpty()); //testando se a pilha está vazia 

stack.push(5);//add o 5 na pilha 
stack.push(8);//add o 8 na pilha, na última posição

console.log(stack.peek()); //vericando qual o número add na pilha - 8

stack.push(11);
console.log(stack.size());//vericando o tamanho atual da pilha, no caso, size = 3
console.log(stack.isEmpty()); //verificando se a pilha está vazia, não está, retorna false

stack.push(15);

console.log(stack);

//removendo itens da pilha 

stack.pop();
stack.pop();
console.log(stack.size());

