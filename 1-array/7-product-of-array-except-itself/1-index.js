// Brute Force Algorithm:
// Input: An array arr of size n.
// Output: An array result of size n, where each element at index i is the product of all elements in the array except arr[i].
// Steps:
// Initialize an empty array result of size n (same size as the input array).
// For each element arr[i] in the array:
// Initialize a variable product to 1.
// Iterate over the entire array again:
// For each element arr[j], if i ≠ j, multiply product by arr[j].
// Store the calculated product at result[i].
// Return the result array.

// PRODUCT OF ALL ELMENETS EXCEPT ITSELF IN AN ARRAY 



// function findProduct(arr){
//     if(arr.length <= 0){
//         return;
//     }

//     let product = 1;
//     let resultArray = [];

//     for(let num of arr){
//         product = product * num;
//     }

//     for(let num of arr){
//         resultArray.push(product / num);
//     }

//     return resultArray;
// }

// const arr = [1,2,3,4];
// const result = findProduct(arr);
// console.log(result);


// // [1,2,3,4]

// // 24, 12, 8, 6




// // OPTIMISE APPROACH

// // Initialization

// // Let n be the length of the input array nums.
// // Create two arrays left[] and right[] to store the products of elements to the left and right of each index, respectively.
// // Create a result[] array to store the final result.
// // Left Array Calculation:

// // Initialize left[0] = 1 because there are no elements to the left of the first element.
// // For each subsequent element, calculate the product of all elements to the left of the current element:
// // left[i] = left[i - 1] * nums[i - 1] for i = 1 to n-1.
// // Right Array Calculation:

// // Initialize right[n-1] = 1 because there are no elements to the right of the last element.
// // For each previous element, calculate the product of all elements to the right of the current element:
// // right[j] = right[j + 1] * nums[j + 1] for j = n-2 to 0.
// // Final Calculation:

// // For each element k in the array, calculate the product of left[k] and right[k]:
// // result[k] = left[k] * right[k].
// // Return the Result:

// // Return the result[] array which contains the product of all elements except the current one for each index.


// function productExceptSelf(nums){
//     if(nums.length <= 0){
//         return [];
//     }


//     let left = new Array(nums.length);
//     let right = new Array(nums.length);


//     // left multipplication  nums

//     left[0] = 1; //no left number is ther in first elment
//     for(let i = 1; i < nums.length; i++){
//         left[i] = left[i - 1] * nums[i - 1];
//     }

//     // right multiplication nums 

//     right[nums.length - 1] = 1; // no right number is present in last number of array
//     for(let j = nums.length - 2; j>=0; j--){
//         right[j] = right[j + 1] * nums[j+1];
//     }

//     // push result in new array

//     let merge = new Array(nums.length);

//     for(let k = 0; k < nums.length; k++){
//         merge[k] = left[k] * right[k];
//     }

//     return merge;
// }


// let nums = [1, 2, 3, 4];
// let productResult = productExceptSelf(nums);
// console.log(productResult);






// DATE = 07 - 04 - 25

// SPACE COMPLEXITY = o(n)
// TIME COMPLEXITY = o(n)
// LIMITATION = Fails if any element is 0: Division by zero gives Infinity or NaN.
// Division-based product array approach

// function findProductExeceptItself(arr){
//     if(arr.length <= 0){
//         return -1;
//     }


//     let product = 1;

//     let result = [];

//     for(let num of arr){
//         product = product * num;
//     }

//     for(let num of arr){
//         result.push(product / num);
//     }

//     return result;
// }


// const arr = [2,1,3,4];
// const ans = findProductExeceptItself(arr);
// console.log(ans);





// Prefix & Suffix Product
// SPACE COMPLEXITY = o(n)
// TIME COMPLEXITY = o(n)

// function findProductExeceptItself(num){
//     if(num.length<=0){
//         return -1;
//     }
//     const left = new Array(num.length);
//     const right = new Array(num.length);

//     left[0] = 1;

//     for(let i = 1; i < num.length; i++){
//         left[i] = left[i - 1] * num[i - 1];
//     }

//     right[num.length - 1] = 1;

//     for(let j = num.length - 2; j >= 0; j--){
//         right[j] = right[j + 1] * num[j + 1]
//     }

//     const result = new Array(num.length);

//     for(let k = 0; k < num.length; k++){
//         result[k] = left[k] * right[k];
//     }

//     return result;
// }
// const arr = [2,1,3,4];
// const ans = findProductExeceptItself(arr);
// console.log(ans);
// [ 12, 24, 8, 6 ]
















// var productExceptSelf = function(nums) {
//     if (nums.length <= 0) {
//         return -1;
//     }

//     let zeroCount = 0;
//     let product = 1;

//     // First pass to calculate total product and count zeros
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             zeroCount++;
//         } else {
//             product *= nums[i];
//         }
//     }

//     let result = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (zeroCount > 1) {
//             // More than one zero means all products will be zero
//             result.push(0);
//         } else if (zeroCount === 1) {
//             // Only the index where zero exists will have the product
//             result.push(nums[i] === 0 ? product : 0);
//         } else {
//             // No zeros, safe to divide
//             result.push(product / nums[i]);
//         }
//     }

//     return result;
// };




















function productExceptSelf(arr){
let n = arr.length;
if(n<=0){
    return 0;
}


let product = 1;


const productArray = [];

for(let num of arr){
    product = product * num;
}


for(let i = 0; i < n; i++){
    productArray.push(product/arr[i]);
}

return productArray;
}




const arr = [2,1,3,4];
console.log(productExceptSelf(arr));


