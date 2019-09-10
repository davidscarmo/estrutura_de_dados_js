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

function baseConverter(decNumber, base)
{
    const remStack = new Stack();

    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let number = decNumber; 
    let rem; 
    let baseString = '';

    if(!(base>=2 && base <=36))
    {
        return '';
    }

    while(number > 0)
    {
        rem = Math.floor(number%base); //pega o resto da divisão do número pela base
        remStack.push(rem); 
        number = Math.floor(number/base);//divide o número pela base 
    }
    while(!remStack.isEmpty())
    {
        baseString += digits[remStack.pop()]; //faz a conversão de acordo com a base 
        /*remStack.pop() o retorna(e exclui) o último valor da pilha, digits usa o valor como indíce 
        e retorna o valor na posição do indíce para baseString */ 
    }
    return baseString;
}

console.log(baseConverter(100345, 2)); // binário - 11000011111111001
console.log(baseConverter(100345, 8)); //octal - 303771
console.log(baseConverter(100345, 16)); //hexadecimal - 187F9
console.log(baseConverter(100345, 35)); //base 35 - 2BW0

