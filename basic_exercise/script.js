// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, 
// My name is (name) and I am (age) years old, and I am a (jobTitle)”
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
        return "My name is " + this.fName + " " + this.lName + " and I am " + this.age + " old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var person1 = new Person("Erich", "Kiss", 39, "clown", false);
var person2 = new Person("Freddy", "Delgado", 35, "extra-clown", true);
console.log(person1.showMessage());
console.log(person2.showMessage());
