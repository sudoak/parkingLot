export default class ParkingLotObserver {
    constructor() {
        this._notified = false;

    }

    notify() {
        this._notified = true;
    }

    hasNotify() {
        return this._notified;
    }
}
