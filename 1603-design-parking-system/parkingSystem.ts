/** https://leetcode.com/problems/design-parking-system/
* parkingSystem.ts
* By: Badilld
* Date: 5-29-23
* Description: A parking system for a parking lot. 
*/

class ParkingSystem {
    parkArray:number[] = [0,0,0];
    constructor(big: number, medium: number, small: number) {
        this.parkArray = [big, medium, small];
    }

    addCar(carType: number): boolean {
        if(this.parkArray[carType-1] != 0){
            this.parkArray[carType-1]--;
            return true;
        }else {
            return false;
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
