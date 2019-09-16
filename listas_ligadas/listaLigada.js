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
                previous.next = current.next;  // o node ao anterior que deseja excluir recebe o node posterior ao que deseja excluir
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

}

const list = new LinkedList();
list.push(15);
list.push(10);

console.log(list);