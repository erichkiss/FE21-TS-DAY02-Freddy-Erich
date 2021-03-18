/* Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)” */
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
var Person = /** @class */ (function () {
    function Person(fN, lN, ag, jobT, empl) {
        this.fName = fN;
        this.lName = lN;
        this.age = ag;
        this.jobTitle = jobT;
        this.employed = empl;
        console.log(this);
    }
    Person.prototype.showMessage = function () {
        return "My name is " + this.fName + " " + this.lName + " and I am " + this.age + " old, I am a " + this.jobTitle;
    };
    return Person;
}());
var person1 = new Person("Erich", "Kiss", 39, "clown", false);
var person2 = new Person("Freddy", "Delgado", 35, "extra-clown", true);
console.log(person1.showMessage());
console.log(person2.showMessage());
var SalaryLoc = /** @class */ (function (_super) {
    __extends(SalaryLoc, _super);
    function SalaryLoc(fN, lN, ag, jobT, empl, sal, jobloc) {
        var _this = _super.call(this, fN, lN, ag, jobT, empl) || this;
        _this.salary = sal;
        _this.joblocation = jobloc;
        return _this;
    }
    SalaryLoc.prototype.showMessage = function () {
        return _super.prototype.showMessage.call(this) + " and the salary is " + this.salary + " $ and i work in " + this.joblocation;
    };
    return SalaryLoc;
}(Person));
var person3 = new SalaryLoc("Maria", "Lecker", 60, "Trapesist", true, 3000, "Circusgasse");
console.log(person3.showMessage());
