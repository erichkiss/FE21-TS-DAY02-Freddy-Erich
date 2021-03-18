var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var array = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(br, co, ty, doo, tu) {
        this.brand = br;
        this.constructionYear = co;
        this.type = ty;
        this.doors = doo;
        this.tuev = tu;
        array.push(this);
    }
    Vehicles.prototype.showPreis = function () {
        //return `${this.brand} and ${this.constructionYear} and ${this.type} and ${this.doors} and ${this.tuev}.<br>`;
    };
    return Vehicles;
}());
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(br, co, ty, doo, tu, lugg, side) {
        var _this = _super.call(this, br, co, ty, doo, tu) || this;
        _this.luggageRack = lugg;
        _this.sideCar = side;
        return _this;
    }
    Motorbike.prototype.showPreis = function () {
        // return super.showMessageCar() + " and " + this.luggageRack + " and " + this.sideCar + "<br>";
    };
    return Motorbike;
}(Vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(br, co, ty, doo, tu, trWi, Die) {
        var _this = _super.call(this, br, co, ty, doo, tu) || this;
        _this.truckWidth = trWi;
        _this.Diesel = Die;
        return _this;
    }
    Truck.prototype.showPreis = function () {
        // return super.showMessageCar() + " and " + this.luggageRack + " and " + this.sideCar + "<br>";
    };
    return Truck;
}(Vehicles));
var car1 = new Vehicles("GMC", 1984, "GMC-45", 5, true);
var mot1 = new Motorbike("Kawasaki", 2005, "GZ-324", 0, true, "tree", false);
var mot2 = new Motorbike("Honda", 2000, "HD-3004", 0, true, "two", false);
var truck1 = new Truck("MAN", 2021, "MN-456", 3, true, 3.5, true);
console.table(array);
