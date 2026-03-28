class Laptop {
    cpu;
    rom;
    ram;
    constructor(ram, rom, cpu) {
        this.ram = ram; this.cpu = cpu; this.rom = rom;
    }
    set setRam(newRam) {
        this.ram = newRam;

        "use strict";

        function createCounter() {
            let count = 0;

            return {
                increment() { count++; },
                getCount() { return count; },
                reset: function () { count = 0; }
            };
        }

        const counter = createCounter();
        counter.increment();
        counter.increment();
        counter.increment();

        const { getCount, reset } = counter;

        try {
            reset();
            console.log("After reset:", counter.getCount());
        } catch (e) {
            console.log("Error:", e.message);
        }

        console.log("Direct call:", counter.getCount());
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