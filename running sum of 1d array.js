/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let x=[]
    for(let i=0; i<nums.length;i++){
        let sum= 0;
        for(let j=i;j>=0;j--){
            sum =sum + nums[j];
        }
        x.push(sum);
    }
    return x;
};