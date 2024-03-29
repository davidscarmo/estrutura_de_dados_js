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

    peek()//verificar qual o último elemento adicionado na pilha 
    {
        if(this.isEmpty())//verificar está vazio
            return undefined;
        
        return this.items[this.count-1];//retorna o último valor
    }
    clear()//remove todos os elementos da pilha e zera o contador
    {
        this.items = [];
        this.count = 0; 
    }

    toString() // retorna a pilha em uma string 
    {
        if(this.isEmpty())
            return '';
        
        let objString = `$[this.items[0]]`; 
        for(let i = 1; i<this.count; i++)
        {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
    
}


const stack = new Stack(); 
stack.push(5);
stack.push(8);

console.log(stack);
