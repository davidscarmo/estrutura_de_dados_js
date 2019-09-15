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
}

const list = new LinkedList();
list.push(15);
list.push(10);

console.log(list);