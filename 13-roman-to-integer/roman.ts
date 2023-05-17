/** https://leetcode.com/problems/roman-to-integer/
* roman.ts
* By: Badilld
* Date: 11-8-22
* Description: Given a roman numeral string, return a int
*/

function romanToInt(s: string): number {
    var number:number;
    var i:number;
    var subtraction:number;
    
    number = 0;
    subtraction = 0;
    
    
    for(i = 0; i < s.length; i++){
        if(s[i] == 'I'){
            if ((s[i+1] == 'V' || s[i+1] == 'X') && i+1 < s.length){
                subtraction = 1;
            }else{
                number += 1;
            }
        }
        else if (s[i] == 'V'){
            if(subtraction){
                number = number + 4;
                subtraction = 0;
            }
            else {
                number = number + 5;
            }
        }
        else if (s[i] == 'X'){
            if(subtraction){
                number = number + 9;
                subtraction = 0;
            }
            else if ((s[i+1] == 'L' || s[i+1] == 'C') && i+1 < s.length){
                subtraction = 1;
            }else {
                number = number + 10;
            }
        }
        else if (s[i] == 'L'){
            if(subtraction){
                number = number + 40;
                subtraction = 0;
            }
            else {
                number = number + 50;
            }
        }
        else if (s[i] == 'C'){
            if(subtraction){
                number = number + 90;
                subtraction = 0;
            }
            else if ((s[i+1] == 'D' || s[i+1] == 'M') && i+1 < s.length){
                subtraction = 1;
            }else {
                number = number + 100;
            }
        }
        else if (s[i] == 'D'){
            if(subtraction){
                number = number + 400;
                subtraction = 0;
            }
            else {
                number = number + 500;
            }
        }
        else if (s[i] == 'M'){
            if(subtraction){
                number = number + 900;
                subtraction = 0;
            }
            else {
                number = number + 1000;
            }
        }
    }
    
    return number
};
