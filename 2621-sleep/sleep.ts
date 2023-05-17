/** https://leetcode.com/problems/sleep/
* sleep.ts
* By: Badilld
* Date: 5-16-23
* Description: Return asyncronous function to sleep for 1 to 1000 milliseconds
*/

async function sleep(millis: number): Promise<void> {
    if(1 <= millis && millis <= 1000){
        return new Promise( resolve => setTimeout(resolve, millis) );
    }
    else {
        console.log("Error: 1 <= millis <= 1000")
    }
}
