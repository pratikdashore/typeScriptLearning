////////////////External moodules///////////////////

export module myModule {
    export interface IVehicle {
        brand: string;
        model: string;
        run: (speed: number) => void;
    }

    class Vehicle implements IVehicle {
        constructor(public brand: string, public model: string) {

        }

        run(speed: number): void {
            console.log(this.model + 'is running on ' + speed);
        }
    }

    class Car extends Vehicle {
        constructor(brand: string, model: string) {
            super(brand, model);
        }

        run(speed: number): void {
            super.run(speed);
            console.log(this.model + 'is running on ' + speed);
        }
    }
}