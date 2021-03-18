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
var Vehicles = /** @class */ (function () {
    function Vehicles(br, co, ty, doo, tu) {
        this.brand = br;
        this.constructionYear = co;
        this.type = ty;
        this.doors = doo;
        this.tuev = tu;
    }
    Vehicles.prototype.showMessageCar = function () {
        // return `${this.brand} and ${this.constructionYear} and ${this.type} and ${this.doors} and ${this.tuev}.<br>`;
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
    Motorbike.prototype.showMessage = function () {
        // return super.showMessageCar() + " and " + this.luggageRack + " and " + this.sideCar + "<br>";
    };
    return Motorbike;
}(Vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Truck;
}(Vehicles));
