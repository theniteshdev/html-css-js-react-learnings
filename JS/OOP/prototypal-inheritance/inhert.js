class Student {
    fullname; age; std;
    constructor(fullname, age, std) {
        this.age = age; this.fullname = fullname; this.std = std;
    }
};

class WorkingProfessional extends Student {
    workingTime; specialistTechnology; degree;
    constructor(workingTime, specialistTechnology, degree, age, fullname) {
        super(fullname, age)
        this.degree = degree, this.specialistTechnology = specialistTechnology, this.workingTime = workingTime
    };
};

const nitesh = new WorkingProfessional("10 PM to 2AM", "Backend", "B-Tech", 23, "theniteshdev");
console.dir(nitesh);
console.log(nitesh);


console.log("end");
console.log("end");
console.log("end");