import {defaultEquals} from "../util.js";
import { Node } from "../models/linked-list-models.js";

export default class LinkedList {
    constructor(equalsFn = defaultEquals)
    {
        this.count = 0; 
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    push(element)
    {
        const node = new Node(element); //criando um node (um nó) com element recebendo o valor passado e o next undefined
        let current; // item atual  
        if(this.head == null)//lista vazia
            this.head = node //recebe o node (elemento, next undefined)
        else
        {
            current = this.head; //recebe o último node 
            while(current.next!=null)
            {
                current = current.next;  //vai incrementando até chegar ao next com undefined
            }

            current.next = node; // recebe o node com o elemento e o next undefined 
        
        }
        this.count++; //incrementa o tamanho da lista
    }
    removeAt(index)
    {
        //verifica valores fora do intervalo 
        if(index >= 0 && index<this.count)
        {
            let current = this.head; 
        
        //remove o primeiro item 
        if(index === 0)
            this.head = current.next; //recebe o que ta em next (o próximo node (element, next))
        else
            {
                /*
                let previous; 
                for(let i = 0; i<index; i++)//itera até o último element, usando < porque está iniciando em 0
                {
                    previous = current; //recebe o nó atual 
                    current = current.next; //recebe o próximo nó 
                }

                previous.next = current.next;  faz a ligação de previous com o next de current, 
                ou seja, pula o current.element para removê-lo*/ 
                
                // código acima refatorado utilizando o método getElementAt 

                const previous = this.getElementAt(index-1); //recebe o node anterior ao que se deseja apagar
                current = previous.next; //recebe o node que está o element que deseja apagar
                previous.next = current.next;  // o node anterior do que se deseja excluir recebe o node posterior do que se deseja excluir
            }
            this.count--;
            return current.element; 
        }
        return undefined; /*caso não se encaixe em nenhuma das condiçoes acima, 
        retorna undefined para mostrar que não foi removido nenhum elemento*/
    }

    getElementAt(index)
    {
        if(index >= 0 && index <= this.count)
        {
            let node = this.head;
            
            for (let i = 0; i < index && node != null ; i++) 
            {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index)
    {
        if(index >= 0 && index <= this.count)
        {
            const node = new Node(element);
            if (index === 0)
             {
                const current = this.head; //currente recebe o node atual 
                node.next = current; //next recebe o node atual 
                this.head = node; // this.head recebe o node    
            }
            else
            {
                const previous = this.getElementAt(index-1); //previous recebe o node da posição anterior ao que se deseja inserir 
                const current = previous.next; // current recebe o "apontamento" posição que se quer inserir 
                node.next = current; // node.next recebe o "apontamento" 
                previous.next = node; // previous.next recebe o node já com o apontamento pra posição desejada 
            }
            this.count++;
            return true;
        }
        return false;
    }

    indexOF(element)
    {
        let current = this.head; // recebe o primeiro nó 
        for(let i = 0; i<this.count && current != null; i++) // se o i for menor que o tamanho da lista e a lista não for nula
        {
            if(this.equalsFn(element, current.element)) //comparar o elemento passado com o elemento do nó 
                return i; 

            current = current.next; //current recebe o próximo nó (iteração) até chegar ou não em um que seja compatível com o elemento passado
        }

        return -1;//caso o valor não seja encontrado 
    }
    
}

const list = new LinkedList();
list.push(15);
list.push(10);

console.log(list);