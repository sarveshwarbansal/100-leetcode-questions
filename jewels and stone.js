/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let count=0;
   let givenLetters = jewels.split("");
   for(let i=0;i<givenLetters.length;i++)
       {
           for(let j=0;j<stones.length;j++)
               {
                   if(givenLetters[i]===stones[j])
                       count++;
               }
       }
   return count;
};