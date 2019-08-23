//let - declaração única 

let language = 'JavaScript';
/* let language = 'Ruby';   se eu declarasse essa linha o seguinte erro apareceria 'SyntaxError: redeclaration of 
let language' aconteceria */ 
console.log(language);

const PI = 3.141593;

// se eu tentasse alterar o valor de PI (Ex: PI = 3.0), ocorreria um erro, const não permite alteração de valor

console.log(PI);


//escopo de variáveis com Let e const 


let movie = 'Lord of the Rings '; 

function starWarsFan() 
{
    const movie = 'Star Wars'; 
    return movie;
}

function marvelFan()
{
    movie: 'The Avengers';
    return movie;
}

function blizzardFan()
{
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if: ' + phrase);
    if(isFan)
    {
        let phrase = 'Initial text';
        phrase = 'For the Horde!';
        console.log('Inside if: ' + phrase);
    }

    phrase = 'For the Aliance!';
    console.log("After if: "  + phrase);
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();