/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @ param {number[]} nums - The input array of integers.
 * @ return {number} Returns the majority element.
 */
function majorityElement(nums) {
    let countMax = 0
    let index = nums[0]

    for(let i = 0; i < nums.length; i++) {
        let count = 1
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i]==nums[j]) {
                count++
            }
        }
        if(count > countMax) {
            countMax = count
            index = nums[i]
        }
    }
    return index
  }

  console.log(majorityElement([3, 2, 3])); // Output: 3 
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 
  console.log(majorityElement([4, 2, 2, 2, 4, 4, 3, 4, 4])); // Output: 4