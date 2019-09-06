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

