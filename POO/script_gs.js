// getters e setters 

// _ (underscore) é utilizado para declarar um atributo privado
class Person 
{
    constructor(name)
    {
        this._name = name;
    }
    get name() //function get 
    {
        return this._name;
    }
    set name(value) // function set
    {
        this._name = value;
    }
}

let lotrChar = new Person('Frodo'); 

console.log(lotrChar.name); 

lotrChar.name = 'Gandalf'; 
console.log(lotrChar.name);
lotrChar._name = 'Sam'; 
console.log(lotrChar.name);