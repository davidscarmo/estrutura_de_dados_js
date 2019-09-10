class Queue {
    constructor()
    {
        this.count = 0;
        this.lowestCount = 0; 
        this.items = {};
    }

    enqueue(element)//adição dos elementos na fila
    {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue()//remoção do primeiro elemento da fila
    {
        if(this.isEmpty())
            return undefined;

        const result = this.items[this.lowestCount]; 
        delete this.items[this.lowestCount];
        this.lowestCount++;

        return result;
    }

    peek()//olhar o primeiro da fila
    {
        if(this.isEmpty())
            return undefined;

        return this.items[this.lowestCount];
    }


    size()//retorna o tamanho da fila
    {
        return this.count - this.lowestCount;
    }

    isEmpty()//retorna se a fila está vazia (true ou false)
    {
        return this.size() === 0;
    }

    clear() //limpa a fila
    {
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;
    }

    toString()//transforma o conteudo de items em uma string (objString)
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

//utilização da classe Queue

//instanciando 
const queue = new Queue();
console.log(queue.isEmpty()); // true 

queue.enqueue('John');//add 
queue.enqueue('Jack');//add
console.log(queue.toString()); //string = John, Jack

queue.enqueue('Camila');//add
console.log(queue.toString()); //string = John, Jack,Camila 

queue.dequeue();//John sai 
queue.dequeue();//Jack sai
console.log(queue.toString()); //string = Camila




