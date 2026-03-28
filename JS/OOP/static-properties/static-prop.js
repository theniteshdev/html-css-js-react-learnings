// static properties
class Laptop {
    _macAddress;
    brand;
    static ram = '8GB';
    static cpu = 'amd';
    static testfun(){
        console.log(this)
    }
    rom;
    constructor(cpu) {
        console.log(this.cpu)
    }
};

const mylaptop = new Laptop("amd rayzen 7");
mylaptop.cpu = 'intel core i7'
console.log(mylaptop.cpu); // amd to intel
console.log(Laptop.cpu)

// mylaptop.testfun(); // this is not a function error
Laptop.testfun(); // here this point the all static keyword's variables | fields


