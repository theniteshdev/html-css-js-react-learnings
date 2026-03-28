class Laptop {
    cpu;
    rom;
    ram;
    constructor(ram, rom, cpu) {
        this.ram = ram; this.cpu = cpu; this.rom = rom;
    }
    set setRam(newRam) {
        this.ram = newRam;
    };

    get getRam() {
        return this.ram;
    };
};

const laptop1 = new Laptop('16gb', '512gb', 'amd rayzen 7');

let { setRam, getRam } = laptop1;

setRam = 'modified ram';
console.log(setRam); // this log-- 'modified ram';
console.log(getRam); // this log-- '16gb'