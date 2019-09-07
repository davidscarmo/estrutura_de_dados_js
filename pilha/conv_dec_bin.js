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


function decimalToBinary(decNumber)
{
    const remStack = new Stack(); 
    let number = decNumber;
    let rem; 
    let binaryString = ''; 

    while(number>0)
    {
        rem = Math.floor(number%2); //utilza o método flor para retornar um inteiro 
        remStack.push(rem);//adiciona o valor de rem na pilha 
        number = Math.floor(number/2); //divide o number por 2 (inteiro)
    }
    while(!remStack.isEmpty())
    {
        binaryString += remStack.pop().toString(); //limpa remStack e passa os valores para a sting binaryString
    }
    return binaryString;
}

console.log(decimalToBinary(100)); //1100100
console.log(decimalToBinary(10));//1010
console.log(decimalToBinary(1000));//1111101000
console.log(decimalToBinary(2));//1