//classe pilha baseada em objeto 


class Stack
{
    constructor()
    {
        this.count = 0; 
        this.items = {};
    }

    push(element)//adicionar elemento na pilha
    {
        this.items[this.count] = element;
        this.count++;
    }

    size()// tamanho da pilha
    {
        return this.count;
    }

    isEmpty()
    {
        return this.count === 0; //retorna se a pilha está vazia ou não - true ou false. 
    }

    pop()
    {
        if(this.isEmpty())//verifica se a pilha está vazia
            return undefined;
        
        this.count--;//decrementa count 
        const result = this.items[this.count];//armazena o último valor 
        delete this.items[this.count]; //remove o último valor 
        return result; //retorna o último valor 
    }
    
}

const stack = new Stack(); 
stack.push(5);
stack.push(8);

console.log(stack);