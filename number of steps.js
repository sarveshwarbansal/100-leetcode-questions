/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let i=0;
    while(num){
    if(num==0){
        return i;
    }
        else if (num%2===0){
            num= Math.floor(num/2);
            i+=1;
        }else{
            num-=1;
            i+=1;
        }
    }
    return i;
};