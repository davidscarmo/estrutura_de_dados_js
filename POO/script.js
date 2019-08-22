//Programação orientada a objetos

//criar objetos simples

// jeito 1
var obj = new Object();

//jeito 2
var obj = {};

//criar objetos completos

var obj = 
{
    name: 
    {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
};

// construtor 

function Book(title, pages, isbn)
{
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    
}
 // instanciar

 var book = new Book('title', 'pag', 'isbn');


 // acessar propriedades e atualizar 

console.log(book.title); // exibe o título do livro
book.title = 'new title'; // atualiza o valor do título do livro
console.log(book.title); //exibe o valor atualizado

// classe com funções 

Book.prototype.pritnTitle = function()
{
    console.log(this.title);
}; 
book.pritnTitle();

// funções na declaração da classe
function Book(title, pages, isbn)
{
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.pritnIsbn = function ()
    {
        console.log(this.isbn);
    };
}


book.pritnIsbn();