export default class ParkingLot{
    constructor(maxSpace){
        this._maxSpace = maxSpace;
        this._slots = new Array();
    }

    park(car) {
        this._slots.push(car);
    }

    isParked(car) {
        return this._slots.includes(car);
    }
}
