var array: Array<Vehicles> =[];
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
        array.push(this);
    }

    showPreis() {
        //return `${this.brand} and ${this.constructionYear} and ${this.type} and ${this.doors} and ${this.tuev}.<br>`;
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

    showPreis() {
        // return super.showMessageCar() + " and " + this.luggageRack + " and " + this.sideCar + "<br>";
    }
}

class Truck extends Vehicles {
    truckWidth;
    Diesel;
    constructor (br : string, co : number, ty : string, doo : number, tu : boolean, trWi: number, Die:boolean){
        super(br, co, ty, doo, tu);
        this.truckWidth = trWi;
        this.Diesel = Die;
    }
    showPreis() {
        // return super.showMessageCar() + " and " + this.luggageRack + " and " + this.sideCar + "<br>";
    }
}

let car1 = new Vehicles("GMC", 1984, "GMC-45", 5, true);
let mot1 = new Motorbike("Kawasaki", 2005, "GZ-324", 0,true,"tree",false);
let mot2 = new Motorbike("Honda", 2000, "HD-3004", 0,true,"two",false);
let truck1 = new Truck("MAN",2021,"MN-456",3,true,3.5,true);

console.table(array);