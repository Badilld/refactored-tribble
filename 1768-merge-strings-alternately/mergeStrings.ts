/** https://leetcode.com/problems/merge-strings-alternately/
* mergeStrings.ts
* By: Badilld
* Date: 6-5-23
* Description: Merge two strings alternately
*/

function mergeAlternately(word1: string, word2: string): string {
    const result:string[] = [];
    for(let i = 0; i < word1.length || i < word2.length; i++){
        result.push(word1[i], word2[i]);
    }
    return result.join('');
};
