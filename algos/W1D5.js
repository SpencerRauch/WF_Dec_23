/* 
  Recreate the built in .slice method

  Given an array, a start index, and an end index,
  return a NEW array that has only the elements from
  the start index (inclusive) to the end index (exclusive)

  What should you do if the provided end index is out of bounds?
  What should you do if the provided start index is out of bounds?
*/

const arr1 = ["a", "b", "c", "d", "e"];
const startIdx1 = 0;
const endIdx1 = 5;
const expected1 = ["a", "b", "c", "d", "e"];

const arr2 = ["a", "b", "c", "d", "e"];
const startIdx2 = 0;
const endIdx2 = 1;
const expected2 = ["a"];

const arr3 = ["a", "b", "c", "d", "e"];
const startIdx3 = 1;
const endIdx3 = 2;
const expected3 = ["b"];

const arr4 = ["a", "b", "c", "d", "e"];
const startIdx4 = -100; // this should be cleaned up to be 0
const endIdx4 = 100; // what should we adjust an overly large end to?
const expected4 = ["a", "b", "c", "d", "e"];

const arr5 = ["a", "b", "c", "d", "e"];
const startIdx5 = 0;
const endIdx5 = 0;
const expected5 = [];

const arr6 = ["a", "b", "c", "d", "e"];
const startIdx6 = 1;
const endIdx6 = 1;
const expected6 = [];


/**
 * Returns a slice of given arr.
 * @param {Array<any>} items
 * @returns {Array<any>} The slice of the given arr from startIdx inclusive
 *    to endIdx.
 */
function slice(items, startIdx, endIdx) {
    // code here
    var slicedItems = []
    var safeStart = startIdx
    var safeEnd = endIdx

    if (safeStart < 0){
        safeStart = 0
    }

    if (safeEnd > items.length){
        safeEnd = items.length
    }

    for (var i = safeStart; i < safeEnd; i++){
        slicedItems.push(items[i])
    }

    return slicedItems
}

// Tests
console.log("\n************Algo #1***********");
const result1 = slice(arr1, startIdx1, endIdx1);
console.log(result1, "should be", expected1);

const result2 = slice(arr2, startIdx2, endIdx2);
console.log(result2, "should be", expected2);

const result3 = slice(arr3, startIdx3, endIdx3);
console.log(result3, "should be", expected3);

const result4 = slice(arr4, startIdx4, endIdx4);
console.log(result4, "should be", expected4);

const result5 = slice(arr5, startIdx5, endIdx5);
console.log(result5, "should be", expected5);

const result6 = slice(arr6, startIdx6, endIdx6);
console.log(result6, "should be", expected6);

/***************************************************************************************************** */
/* 
  Recreate the built in .reverse method

  Given an array, alter the array in place to have all of it's elements reversed
  https://login.codingdojo.com/m/201/7911/54786 <-- hints on swapping values
*/

const arrA = ["a", "b", "c", "d", "e"];
const expectedA = ["e", "d", "c", "b", "a"];

const arrB = ["s", "l", "a", "p"];
const expectedB = ["p", "a", "l", "s"];

const arrC = ["k", "n", "i", "t", "s"];
const expectedC = ["s", "t", "i", "n", "k"];



/**
 * Reverses a given array in place
 * @param {Array<any>} items
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {Array<any>} The original array, altered to be reversed
 *    
 */
function reverse(items) {
    var middle = Math.floor(items.length/2)
    for (var leftIndex = 0; leftIndex < middle; leftIndex++){
        var rightIndex = items.length - 1 - leftIndex;
        var temp = items[leftIndex]
        items[leftIndex] = items[rightIndex]
        items[rightIndex] = temp
    }
    return items
}

// Tests
console.log("\n************Algo #2***********");
console.log("A");
const test1 = reverse(arrA);
console.log(test1, "should be", expectedA); //tests return value
console.log(arrA, "should be", expectedA); //tests that original array was altered

console.log("\nB");
const test2 = reverse(arrB);
console.log(test2, "should be", expectedB);
console.log(arrB, "should be", expectedB);

console.log("\nC");
const test3 = reverse(arrC);
console.log(test3, "should be", expectedC);
console.log(arrC, "should be", expectedC);
