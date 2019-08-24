//templates literais

const book = 
{
    name: 'Learning JavaScript DataStructures and Algorithms'
};

// modo normal
console.log('You area reading ' + book.name + '.,\n and this is a new line \n and so is this.');

//template literal
console.log(` You are reading ${book.name}.,
and this is a new line
and so is this.`); // crase no lugar de apóstrofo e não havendo necessidade de usar \n para pular linha 