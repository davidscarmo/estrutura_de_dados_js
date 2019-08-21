//intruções condicionais 

var num = 1; 
//if
if(num === 1)
    console.log('num is equal to 1'); // num é igual a 1


var num = 0; 
//if... else
if(num === 1)
    console.log('num is equal to 1'); // num é igual a 1
else
    console.log('num is not equal to 1, the value of num is ' + num);//num não é igual a 1, o valor the num é

//if x ternário

//if
if(num === 1)
    num--;
else
    num++;

//ternário
(num ===1) ? num-- : num++; 

//if vs switch 

var month = 5;
//if
if(month ===1)
    console.log('January');
else if(month === 2)
    console.log('February');
else if(month ==='3')
    console.log('March');
else
    console.log('Month is not January, February or March');

//switch
switch(month)
{
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, February or March.');
     
}

