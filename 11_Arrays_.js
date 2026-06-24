//task :Modify last element of array to 19

array=[2,4,6,7];
array[3]=19;
console.log(array);

//task2: creat function to get the last element of array
array2=['Areeba', 'Noor', 'ALi'];

function getLastValue(array){
   let lastValue=array.length -1
    return array[lastValue];
}

console.log(getLastValue(array2))
console.log(getLastValue(array));

//task 3: swap last two elements

function swapElements(array) {
    let lastIndex = array.length - 1;
    let secondLastIndex = array.length - 2;

    let temp = array[lastIndex];

    array[lastIndex] = array[secondLastIndex];
    array[secondLastIndex] = temp;

    console.log(array);
}
swapElements(array2)