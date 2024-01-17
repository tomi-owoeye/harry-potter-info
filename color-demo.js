const Color = require('color');
console.log("color demo started")

const shade = Color('red').lighten(0.5);
console.log(shade.hex())