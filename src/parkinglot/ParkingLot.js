export default class ParkingLot{

    constructor(maxSpace) {
        this._maxSpace = maxSpace;
        this._slot = [];
        this._observers = [];

    }

    park(car) {
        if(this.isFull()){
            throw new Error("Parking lot is full");
        }

        if(this.isParked(car)){
            throw new Error("Car is already parked");
        }
        this._slot.push(car);

        if(this.isFull()){
            this._observers.forEach((observer) => {observer.notifyParkingLotIsFull()})
        }
    }

    isFull() {
        return this._maxSpace === this._slot.length;
    }

    isParked(car) {
        return this._slot.includes(car);
    }

    unpark(car) {
        if(!this.isParked(car)){
            throw new Error("Car is not parked in parking lot")
        }

        this._slot = this._slot.filter((parkedCar) => parkedCar !== car);

        if(this._maxSpace === this._slot.length + 1){
            this._observers.forEach((observer) => {observer.notifyParkingLotSpaceAvailable()})
        }

    }

    addObserver(observer) {
        this._observers.push(observer);
    }
}
