class Deque 
{
    constructor()
    {
        this.count = 0;
        this.lowestCount =0;
        this.items = [];
    }

    addFront(element)//adição dos elementos no início do deque 
    {
        if(this.isEmpty())
            this.addBack(element); // adiciona o elemento no fim do deque (no caso também a frente)
        else if(this.lowestCount > 0)
        {
            this.lowestCount--;
            this.items[this.lowestCount] = element; //adiciona um elemento na frente do deque¹ 
            /*1 : essa condição vai ser usada quando o elemento removido for o primeiro do deque */ 
        }else 
        {
            for(let i = this.count; i>0; i--)
                this.items[i] = this.items[i-1];
        }
        this.count++; 
        this.lowestCount = 0; 
        this.items[0] = element;
    }

    addBack(element)//adição dos elementos no fim do deque 
    {
        this.items[this.count] = element;
        this.count++;
    }

    removeFront()//remoção do primeiro elemento do deque
    {
        if(this.isEmpty())
            return undefined;

        const result = this.items[this.lowestCount]; 
        delete this.items[this.lowestCount];
        this.lowestCount++;

        return result;
    }
    removeBack()//remove o último elemento do deque
    {
        if(this.isEmpty())//verifica se o deque está vazio
            return undefined;
        
        this.count--;
        const result = this.items[this.count];//armazena o último valor 
        delete this.items[this.count]; //remove o último valor 
        return result;  
    }
    peekFront()//visualizar o primeiro elemento do deque
    {
        if(this.isEmpty())
            return undefined;

        return this.items[this.lowestCount];
    }
    peekBack()//visualizar o último elemento do deque 
    {
        return this.items[this.items.length-1];
    }

    size()//retorna o tamanho do deque
    {
        return this.count - this.lowestCount;
    }

    isEmpty()//retorna se o deque está vazio (true ou false)
    {
        return this.size() === 0;
    }

    clear() //limpa o deque
    {
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;
    }

    toString()//transforma o conteudo de items[] em uma string (objString)
    {
        if(this.isEmpty())
            return '';
        
    let objString = `${this.items[this.lowestCount]}`;

    for(let i = this.lowestCount + 1; i<this.count; i++)
    {
         objString = `${objString},${this.items[i]}`; 
    }
    return objString;
    }
}

const deque = new Deque(); 
console.log(deque.isEmpty()); // true

deque.addBack('John');
deque.addBack('Jack'); 

console.log(deque.toString()); //John, Jack 
deque.addBack('Camila');

console.log(deque.toString()); //John, Jack, Camila
console.log(deque.size()); // 3 

console.log(deque.isEmpty()); //false

deque.removeFront(); //retira John do deque 
console.log(deque.toString()); //Jack, Camila

deque.removeBack(); //retira Camila
console.log(deque.toString()); //Jack 

deque.addBack('John'); //John é adicionado novamente na frente do deque
console.log(deque.toString()); //John, Jack
