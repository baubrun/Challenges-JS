/**
 * 
 *
 * Given an array of integers, return indices of the two 
numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/**
 * [7, 11, 15, 2]
store index of elem as value
since complement is key then other num is current num idx
 */




const twoSum = function (nums, target) {
    dict = {}

    for (let i = 0; i < nums.length; i++){
        if (target - nums[i] in dict){
            return [dict[target - nums[i]], i]
        } else {
            dict[nums[i]] = i
        }
    }
};



const ans = twoSum([7, 11, 15, 2], 9)
console.log(ans)

