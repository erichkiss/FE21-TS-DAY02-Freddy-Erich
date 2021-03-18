// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, 
// My name is (name) and I am (age) years old, and I am a (jobTitle)”

interface PersonTemplate {
    fName : string;
    lName : string;
    age : number;
    jobTitle : string;
    employed : boolean;
}

class Person implements PersonTemplate {
    fName;
    lName;
    age;
    jobTitle;
    employed;
    constructor (fN : string, lN : string, ag : number, jobT :string, empl : boolean) {
        this.fName = fN;
        this.lName = lN;
        this.age = ag;
        this.jobTitle = jobT;
        this.employed = empl;
        console.log(this);
    }
    showMessage () {
        return `My name is ${this.fName} ${this.lName} and I am ${this.age} old, and I am a ${this.jobTitle}`;
    }
}

var person1 = new Person("Erich", "Kiss", 39, "clown", false);
var person2 = new Person("Freddy", "Delgado", 35, "extra-clown", true);

console.log(person1.showMessage());
console.log(person2.showMessage());

