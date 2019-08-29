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