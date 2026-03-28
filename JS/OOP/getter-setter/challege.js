
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
