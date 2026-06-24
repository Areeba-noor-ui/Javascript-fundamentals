/*Create a loop that displays 1 to
20 in the console. If the number is divisible by 3, display 'Fizz' instead
of the number. If it's divisible by 5, display 'Buzz' instead. If it's divisible
by 3 and 5, display 'FizzBuzz' instead. Buzz, Fizz, 7, 8, ... 13, 14, FizzBuzz, 16, 17, ...8*/

for (let i=1; i<=20;i++){

    if(i%3 ==0 && i%5==0){
        console.log('FizzBuzz')
}
    else if (i%3==0){
        console.log('Fizz');
    }
    else if (i%5==0){
        console.log('Buzz');
}
    else 
        console.log(i);
}

















