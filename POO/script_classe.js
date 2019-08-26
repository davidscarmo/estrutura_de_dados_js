//classe modo anterior a ES2015
/*
function Book(title, pages, isbn)
{
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

Book.prototype.printTitle = function () 
{
    console.log(this.title);
}; 
*/

//classe após a ES2015

class Book 
{
    constructor(title, pages, isbn)
    {
        this.title =title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn()
    {
        console.log(this.isbn);
    }
}

let book = new Book('title', 'pag', 'isbn');
console.log(book.title);//exibe o título do livro 
book.title = 'new title';//altera o título do livro
console.log(book.title);//exibe o título do livro alterado

//herança

class ITBook extends Book
{
    constructor(title, pages, isbn, technology)
    {
        super(title, pages, isbn);
        this.technology = technology;
    }
    printTechnology()
    {
        console.log(this.technology);
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234657890', 'JavaScript');
console.log(jsBook.title); // mostra o título 
console.log(jsBook.printTechnology()); // mostra a technology 'JavaScript'