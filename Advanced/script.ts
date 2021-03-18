class Vehicles {
    brand : string;
    constructionYear : number;
    type : string;
    doors : number;
    tuev : boolean;

    constructor (br : string, co : number, ty : string, doo : number, tu : boolean) {
        this.brand = br;
        this.constructionYear = co;
        this.type = ty;
        this.doors = doo;
        this.tuev = tu;
    }

    showMessageCar() {
        // return `${this.brand} and ${this.constructionYear} and ${this.type} and ${this.doors} and ${this.tuev}.<br>`;
    }
}

class Motorbike extends Vehicles {
    luggageRack;
    sideCar;

    constructor (br : string, co : number, ty : string, doo : number, tu : boolean, lugg : string, side : boolean) {
        super(br, co, ty, doo, tu);
        this.luggageRack = lugg;
        this.sideCar = side;
    }

    showMessage() {
        // return super.showMessageCar() + " and " + this.luggageRack + " and " + this.sideCar + "<br>";
    }
}

class Truck extends Vehicles {
    
}