let laptop = "accer aspire"
const lang = "javascript"

// accessing char of sting
/**
 * laptop= l=0 | a=1 | p=2 | t=3 | o=4 | p=5
 */
laptop[4]; // o
laptop[0]

// length property of string
laptop.length // returns= (laptop.length + 1)

// fun methods of string
laptop.toLowerCase().toUpperCase(); // this is method chaning

// trim
const whoami = "Engineer   "
whoami.trim(); // Engineer

// includes
lang.includes("js"); // false
lang.includes("java"); // true

// indexOf | return the index of given value
laptop.indexOf(" ")
laptop.indexOf("a");
laptop.indexOf("z"); // here does't exist= -1

// replace
let msg = "All the students are informed that, our school is going to organise 'Logic Building' competition, classes from class-6 to 10th can participate. Students are encourgage to participate.";

msg.replace("Logic Building", "Problem Soving");
msg.replaceAll(" ", "-")

// concat
let x = "aple"
let y = "boy"
x.concat(y); // apleboy

// padStart
let lastFourDigit = "4534"
lastFourDigit.padStart(16, "*"); // ***********4534

// charCodeAt | by default it take its first chars
laptop.charCodeAt(3);

// split
laptop.split("a")


// MATHS OBJECT-------------------------------------------- //
// maths i love to practice on browser