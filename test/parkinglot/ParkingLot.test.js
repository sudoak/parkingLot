import ParkingLot from "../../src/parkinglot/ParkingLot";
import Car from "../../src/parkinglot/Car";
import ParkingLotObserver from "../../src/parkinglot/ParkingLotObserver";

jest.mock("../../src/parkinglot/ParkingLotObserver");


describe('parking lot', function () {
    describe('#park', function () {
        it('isParked should  return true when car is parked', function () {
            let parkingLot = new ParkingLot(1);
            let car = new Car(34);
            parkingLot.park(car);

            expect(parkingLot.isParked(car)).toBeTruthy();
        });

        it('isParked should return false when car is not parked', function () {
            let parkingLot = new ParkingLot(1);
            let car = new Car(34);

            expect(parkingLot.isParked(car)).toBeFalsy();
        });

        it('should throw parking lot is full when try to park a car in full parking lot', function () {
            let parkingLot = new ParkingLot(1);
            let car = new Car(34);

            parkingLot.park(car);

            expect(() => parkingLot.park(car)).toThrowError("Parking lot is full");
        });

        it('should throw car is already parked when try to park car twice', function () {
            let parkingLot = new ParkingLot(2);
            let car = new Car(34);

            parkingLot.park(car);

            expect(() => parkingLot.park(car)).toThrowError("Car is already parked");
        });
    });

    describe('#unpark', function () {
        it('should return car if given car is already parked', function () {
            let parkingLot = new ParkingLot(1);
            let car = new Car(34);
            parkingLot.park(car);

            let unparkedCar = parkingLot.unpark(car);

            expect(unparkedCar).toEqual(car);
        });

        it('should throw error car is not parked in parking lot message when given car is not parked', function () {
            let parkingLot = new ParkingLot(1);
            let car = new Car(34);

            expect(() => parkingLot.unpark(car)).toThrowError("Car is not parked in parking lot")
        });

    });

    describe('#notify', function () {
        let owner;
        let trafficCop;

        beforeEach(() => {
            // Clear all instances and calls to constructor and all methods:
           ParkingLotObserver.mockClear();
            owner = new ParkingLotObserver();
            trafficCop = new ParkingLotObserver();
        });

        it('should notify owner when parking lot is full', function () {
            let parkingLot = new ParkingLot(1);
            let car = new Car(34);


            parkingLot.addObserver(owner);

            parkingLot.park(car);

            expect(owner.notifyParkingLotIsFull).toHaveBeenCalledTimes(1);
        });

        it('should not notify owner when parking lot is not full', function () {
            let parkingLot = new ParkingLot(2);
            let car = new Car(34);
            let owner = new ParkingLotObserver();

            parkingLot.addObserver(owner);

            parkingLot.park(car);

            expect(owner.notifyParkingLotIsFull()).toBeFalsy();
        });


        it('should notify traffic cop when parking lot is full', function () {
            let parkingLot = new ParkingLot(1);
            let car = new Car(34);
            let trafficCop = new ParkingLotObserver();

            parkingLot.addObserver(trafficCop);

            parkingLot.park(car);
            expect(trafficCop.notifyParkingLotIsFull).toHaveBeenCalledTimes(1);
        });

        it('should not notify traffic cop when parking lot is not full', function () {
            let parkingLot = new ParkingLot(2);
            let car = new Car(34);
            let trafficCop = new ParkingLotObserver();

            parkingLot.addObserver(trafficCop);

            parkingLot.park(car);

            expect(trafficCop.notifyParkingLotIsFull).not.toHaveBeenCalled();
        });

        it('should notify traffic cop and owner when parking lot is full', function () {
            let parkingLot = new ParkingLot(1);
            let car = new Car(34);


            parkingLot.addObserver(owner);
            parkingLot.addObserver(trafficCop);

            parkingLot.park(car);

            expect(owner.notifyParkingLotIsFull).toHaveBeenCalledTimes(1);
            expect(trafficCop.notifyParkingLotIsFull).toHaveBeenCalledTimes(1);


        });

        it('should not notify traffic cop and owner when parking lot is not full', () => {
            let parkingLot = new ParkingLot(2);
            let car = new Car(34);

            let owner = new ParkingLotObserver();
            let trafficCop = new ParkingLotObserver();

            parkingLot.addObserver(owner);
            parkingLot.addObserver(trafficCop);

            parkingLot.park(car);

            expect(owner.notifyParkingLotIsFull).not.toHaveBeenCalled();
            expect(trafficCop.notifyParkingLotIsFull).not.toHaveBeenCalled();
        });

        it('should notify traffic cop and owner when space is available in parking lot', () => {
            let parkingLot = new ParkingLot(1);
            let car = new Car(34);

            let owner = new ParkingLotObserver();
            let trafficCop = new ParkingLotObserver();

            parkingLot.addObserver(owner);
            parkingLot.addObserver(trafficCop);

            parkingLot.park(car);

            parkingLot.unpark(car);

            expect(owner.notifyParkingLotIsFull).toHaveBeenCalledTimes(1);
            expect(trafficCop.notifyParkingLotIsFull).toHaveBeenCalledTimes(1);
        });

    });

});
