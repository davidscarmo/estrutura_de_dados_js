//Arrays Bidimensionais e multidimensionais 

//média de temperatura em fahrenheit 

//arrays simples 
let averageTempDay1 = [72, 75, 79, 81, 81]; 
let averageTempDay2 = [81, 79, 75, 75, 72];


//matriz/ array de array 
let averageTemp = []; 

averageTemp[0] = [72, 75, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 72];

console.log(averageTemp);
//outra forma de fazer o código anterior

averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 81;
averageTemp[0][4] = 82;

averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 74;
averageTemp[1][4] = 73;

console.log(averageTemp);

//iterando pelos elementos de arrays bimensionais 

function printMatrix(myMatryx)
{
    for(let i = 0; i<myMatryx.length; i++)
    {
        for(let j = 0; j<myMatryx[i].length; j++)
        {
            console.log(myMatryx[i][j]);
        }
    }
}

printMatrix(averageTemp);

//montar o array multdimensional 

const matrix3x3x3 = [];

for(let i=0; i<3; i++)// i linha
{
    matrix3x3x3[i] = [];//é preciso inicializar cada array 
    for(let j = 0; j <3; j++)//j coluna
    {
        matrix3x3x3[i][j] = [];
        for(let z = 0; z<3; z++)//z dimensão
        {
            matrix3x3x3[i][j][z]; 
        }
    }
}

//para mostrar o array multdimensional

/*
for(let i = 0; i<matrix3x3x3.length;i++)
{
    for(let j = 0; j<matrix3x3x3[i]; j++)
       {
            for(let z = 0; z<matrix3x3x3[i][j]; z++)
            {
                console.log("a" + matrix3x3x3[i][j][z]);
            }
       }
    }
*/

//juntando vários arrays

const zero = 0;
const positiveNumbers = [1,2,3];
const negativeNumbers = [-3,-2,-1];

let numbers = negativeNumbers.concat(zero,positiveNumbers);

console.log(numbers);
