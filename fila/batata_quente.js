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


/*Algoritmo para simular a brincadeira 'Batata Quente' - Fila Circular*/

function hotPotato(elementList, num)
{
    const queue = new Queue();
    const elimitatedList = [];
    for(let i=0; i <elementList.length; i++)
        queue.enqueue(elementList[i]); //enfileirando os elementos da lista
    
    while(queue.size() > 1)
    {
        for(let i=0; i<num; i++)//num é passado como parâmetro 
            queue.enqueue(queue.dequeue());//remove um item do inicio da fila e o passa para o final da fila
        
        elimitatedList.push(queue.dequeue()); //remove o elemento e adiciona ele na element list 
    }
    return {
        eliminated: elimitatedList, 
        winner: queue.dequeue()
    };
}

const names = ['David','Will', 'Jess', 'Ana', 'Michelle'];
const result = hotPotato(names, 7); 

result.eliminated.forEach(name => {
        console.log(`${name} foi eliminado(a) da Batata Quente!`);
    });

console.log(`O(a) vencedor(a) foi: ${result.winner} `);

/*
Jess foi eliminado(a) da Batata Quente! batata_quente.js:95:17
Will foi eliminado(a) da Batata Quente! batata_quente.js:95:17
Michelle foi eliminado(a) da Batata Quente! batata_quente.js:95:17
Ana foi eliminado(a) da Batata Quente! batata_quente.js:95:17
O(a) vencedor(a) foi: David  */