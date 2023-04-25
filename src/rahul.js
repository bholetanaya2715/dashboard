// given a number find the sum of all the multiples of 3 n 5

let a = 11; // 12345678910
 
let result = 0 ;

for (  let i = 1 ; i <= a ;i++ )
{
    if( i  % 3 === 0 || i % 5 === 0)
    {
        result = result + i;
    }

}


console.log(result)




//reverseeee dting

function reverseString(str)
{
    return   str.split("").reverse().join("");

}
let str = "rahul";
let reverse = reverseString(str);

console.log(reverse);

