/* 
  Recreate unshift
  Given array and an additional value, insert this value at the beginning of
  the array by making space for it at the beginning of the array.
  return the new length of the array.
  https://www.w3schools.com/jsref/jsref_unshift.asp
  Do this without using any built-in array methods. (push is okay)
*/

const arr1 = [1, 2, 3];
const newItem1 = 0;
const expected1 = 4;
// after function is called, arr1 should be:
const arr1Expected = [0, 1, 2, 3];

const arr2 = [];
const newItem2 = "a";
const expected2 = 1;
// after function is called, arr2 should be:
const arr2Expected = ["a"];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
 */
function unshift(items, newItem) {
    // code here
}

console.log("****Test 1****");
console.log(unshift(arr1, newItem1), "expected:", expected1);
console.log(arr1, "should be:", arr1Expected, "\n");
console.log("****Test 2****");
console.log(unshift(arr2, newItem2), "expected:", expected2);
console.log(arr2, "should be:", arr2Expected);
