/*Create a function addNum(array, num) that takes an array of numbers
and returns an array where each number is increased by 'num'.
· addNum([1, 2, 3], 2) => [3, 4, 5]*/

function addNum(array,num){
    let result=[];
    for (i=0; i<array.length; i++){
        result.push(array[i]+num);
    }
    return result;
}

let array=[2,6,7,8];
modified_array= addNum(array,3);
console.log(`Before Array: ${array}`)
console.log(`Added Number 3 : ${modified_array}`)



