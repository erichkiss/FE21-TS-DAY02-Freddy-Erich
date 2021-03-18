/* Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)” */


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
        return `My name is ${this.fName} ${this.lName} and I am ${this.age} old, I am a ${this.jobTitle}`;
    }
}

var person1 = new Person("Erich", "Kiss", 39, "clown", false);
var person2 = new Person("Freddy", "Delgado", 35, "extra-clown", true);

console.log(person1.showMessage());
console.log(person2.showMessage());

class SalaryLoc extends Person{
    salary: number;
    joblocation: string;
    constructor(fN : string, lN : string, ag : number, jobT :string, empl : boolean, sal:number, jobloc: string){
        super(fN, lN, ag, jobT, empl);
        this.salary = sal;
        this.joblocation = jobloc;
    }
    showMessage(){
        return `${super.showMessage()} and the salary is ${this.salary} $ and i work in ${this.joblocation}`;
    }
}
var person3 = new SalaryLoc("Maria","Lecker",60 ,"Trapesist",true, 3000, "Circusgasse");
console.log(person3.showMessage());
