// Actual Deep Cloning

const apples = ['Gala', "Fuji", "Granny Smith", "Red Delicious", 'Mcintosh'];
const deepCopyVal = JSON.parse(JSON.stringify(apples));

console.log(deepCopyVal)