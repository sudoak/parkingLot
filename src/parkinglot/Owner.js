export default class Owner{

    constructor() {
        this._notified = false;

    }

    notify(){
        this._notified = true;
    }

    hasNotify() {
        return this._notified;
    }
}
