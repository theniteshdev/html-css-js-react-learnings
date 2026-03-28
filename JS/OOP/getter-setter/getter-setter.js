// getter and setter

class Laptop {
    ram;
    rom;
    constructor(ram, rom) {
        this.ram = ram;
        this.rom = rom;
    }

    get getLaptopRam() {
        return this.ram
    };

    set setLaptopRam(ram) {
        this.ram = ram;
        console.log(this.ram)
        return this.ram;
    }

};

const l1 = new Laptop('16gb', '128gb');

console.log(l1);
console.log(l1.getLaptopRam);
l1.setLaptopRam = '8gb';

/**
set -> its a function but not call just access like property.
get -> its a function but call like property and provide the return value
 */

let { getLaptopRam, setLaptopRam, ram, rom } = l1; // destructuing the fields

console.log(getLaptopRam)
setLaptopRam = 'testtt'; // here this is not working
console.log('getting laptop\'s ra')
console.log(getLaptopRam)

console.log(ram)
console.log(rom)

