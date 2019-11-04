import ParkingLot from "../src/ParkingLot";
import Car from "../src/Car";


describe('parking lot', function () {
    describe('#park', function () {
            it('isParked should  return true when car is parked', function () {
                let parkingLot = new ParkingLot(1);
                let car = new Car();
                parkingLot.park(car);

                expect(parkingLot.isParked(car)).toBeTruthy();
            });

        //     it('isParked should return false when car is not parked', function () {
        //         let parkingLot = new ParkingLot(1);
        //         let car = new Car();
        //
        //         expect(parkingLot.isParked(car)).toBeFalsy();
        //     });
        //
        //     it('should throw parking lot is full when try to park a car in full parking lot', function () {
        //         let parkingLot = new ParkingLot(1);
        //         let car = new Car();
        //
        //         parkingLot.park(car);
        //
        //         expect(()=> parkingLot.park(car)).toThrowError("Parking lot is full");
        //     });
        //
        // it('should throw car is already parked when try to park car twice', function () {
        //     let parkingLot = new ParkingLot(2);
        //     let car = new Car();
        //
        //     parkingLot.park(car);
        //
        //     expect(()=> parkingLot.park(car)).toThrowError("Car is already parked");
        // });
    });

    // describe('#unpark', function () {
    //     it('should return car if given car is already parked', function () {
    //         let parkingLot = new ParkingLot(1);
    //         let car = new Car();
    //         parkingLot.park(car);
    //
    //         parkingLot.unpark(car);
    //     });
    //
    //     it('should throw error car is not parked in parking lot message when given car is not parked', function () {
    //         let parkingLot = new ParkingLot(1);
    //         let car = new Car();
    //         parkingLot.park(car);
    //
    //         expect(() => parkingLot.unpark(car)).toThrowError("Car is not parked in parking lot")
    //     });
    //
    // });
});
