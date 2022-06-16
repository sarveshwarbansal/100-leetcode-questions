/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let max=0;
     for(let i=0; i<accounts.length;i++){
         let n = accounts[i];
         let sum =0;
     while(n.length){
         sum=sum+n.shift();
     }
         if(max<=sum){
             max=sum;
         }
     }
     return max;
 };