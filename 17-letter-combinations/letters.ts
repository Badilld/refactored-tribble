/** https://leetcode.com/problems/letter-combinations-of-a-phone-number/
* letters.ts
* By: Badilld
* Date: 5-22-23
* Description: Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
*/

function getLetters(num: string): string[] {
    let result: string[] = [];
    switch(num){
        case "2": {
            result = ["a", "b", "c"];
            break;
        }
        case "3": {
            result = ["d", "e", "f"];
            break;
        }
        case "4": {
            result = ["g", "h", "i"];
            break;
        }
        case "5": {
            result = ["j", "k", "l"];
            break;
        }
        case "6": {
            result = ["m", "n", "o"];
            break;
        }
        case "7": {
            result = ["p", "q", "r", "s"];
            break;
        }
        case "8": {
            result = ["t", "u", "v"];
            break;
        }
        case "9": {
            result = ["w", "x", "y", "z"];
            break;
        }
        default:{
            console.log("Error: Incorrect input");
        }
    }
    return result;
};

function combineLetters(curr:string[], previous:string[]): string[] {
    let result:string[] = [];
    if(previous.length == 0){
        return curr;
    }
    for(let i = 0; i < previous.length; i++){
        for(let j = 0; j < curr.length; j++){
            result.push(previous[i] + curr[j]);
        }
    }
    return result;
};

function letterCombinations(digits: string): string[] {
    if(digits.length < 0 || digits.length > 5){
        return null;
    }
    let results:string[] = [];
    let curr:string[] = [];
    for(let i = 0; i < digits.length; i++){
        curr = [];
        curr = getLetters(digits.slice(i,i+1));
        results = combineLetters(curr, results);
    }
    return results;
};
