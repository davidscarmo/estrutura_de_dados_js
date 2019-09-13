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

function palindromeChecker(aString)
{
    if(aString === undefined || aString === null || (aString !==null && aString.length === 0))
        return false; 

    const deque = new Deque();
    const lowestString = aString.toLocaleLowerCase().split(' ').join(''); /*transforma o array em uma string, 
    transforma todos elementos em minúsculos, separa e junta os elementos removendo os espaços*/
    let isEqual = true; 
    let firstChar, lasChar;

    for(let i = 0; i<lowestString.length; i++)
        deque.addBack(lowestString.charAt(i)); //são passados os elementos de lowestString para deque (um atrás do outro, push()) 
    
    while(deque.size()>1 && isEqual)
    {
        firstChar = deque.removeFront(); 
        lastChar = deque.removeBack(); 
        if(firstChar !== lastChar)//compara as extremidades do deque, para saber se são iguais
            isEqual = false;
    }
    return isEqual;
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('a'));
console.log('kayak', palindromeChecker('kayak'));
console.log('o galo ama o lago', palindromeChecker('o galo ama o lago'));
console.log('aibofobia', palindromeChecker('aibofobia'));