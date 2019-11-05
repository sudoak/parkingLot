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

        if(this._maxSpace === this._slots.length && this._owner){
            this._owner.notify();
        }
    }

    isParked(car) {
        return this._slots.includes(car);
    }

    unpark(car) {
        if(!this.isParked(car)){
            throw new Error("Car is not parked in parking lot")
        }
        return car;
    }

    addObserver(observer) {
        this._owner = observer;
    }
}
