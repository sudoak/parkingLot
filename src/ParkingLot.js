export default class ParkingLot{

    constructor(maxSpace) {
        this._maxSpace = maxSpace;
        this._slots = [];

    }

    park(car) {
        if(this._maxSpace === this._slots.length){
            throw new Error("Parking lot is full");
        }

        if(this.isParked(car)){
            throw new Error("Car is already parked");
        }
        this._slots.push(car);
    }

    isParked(car) {
        return this._slots.includes(car);
    }

}
