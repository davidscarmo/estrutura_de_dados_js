import {'defaultEquals} from "../util.js";
import { Node } from "../models/linked-list-models.js";
import { LinkedList } from "../models/linked-list-models2.js";

export default class DoublyNode extends Node
{
    constructor(element, next, prev)
    {
        super(element,next);//reaproveita element e next da class node
        this.prev = prev; 
    }
     
}

export default class DoublyLinkedList extends LinkedList
    {
        constructor(equalsFn = defaultEquals)
        {
            super(equalsFn); 
            this.tail = undefined; 
        }
        
        insert(element, index)
        {
            if(index >= 0 && index <= this.count)
            {
                const node = new DoublyNode(element);
                let current = this.head; 
                if(index === 0)
                {
                    if(this.head == null)
                    {
                        this.head = node;
                        this.tail = node; 
                    }
                    else 
                    {
                        node.next = this.head; 
                        current.prev = node;
                        this.head = node;
                    }
                }
            else if(index === this.count)
            {
                current = this.tail;
                current.next = node; 
                node.prev = current;
                this.tail = node;
            }
            else
            {
                const previous = this.getElementAt(index-1);
                current = previous.next; 
                node.next = current; 
                previous.next = node;
                current.prev = node; 
                node.prev = previous; 
            }
            this.count++; 
            return true;
        }
         return false;
        }
    }