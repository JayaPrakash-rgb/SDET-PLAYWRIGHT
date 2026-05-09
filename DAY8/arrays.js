//ARRAYS
// 1. Find the largest and smallest number in an array.

function MinMax(arr) {
    const largest = Math.max(...arr);
    const smallest = Math.min(...arr);
    return `Original Array: [${arr}] | Smallest: ${smallest}, Largest: ${largest}`;
}

const numbers = [1,20,2,30,3,40,4,55,800];
console.log(MinMax(numbers)); 
console.log();

// 2. Remove duplicate elements from an array. 
function removeDuplicates(arr) {
    return arr.filter((num, index) => {
        return arr.indexOf(num) === index;
    });
}
const list = [1,2,3,4,1,2,5,];
console.log(removeDuplicates(list)); 
console.log();

//3. Sort an array without using built-in sort(). 
function Sort(arr) {
    let n = arr.length;
        for (let i = 0; i < n; i++) {
             for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const unsorted = [90,100,55,22,3,7,1,2,3,];
console.log("Sorted Array:", Sort(unsorted)); 

//4. Find second largest number in an array. 
