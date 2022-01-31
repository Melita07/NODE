const path = require('path'); //predefined module
//used to combine,get the name of a path


const fileLocation = path.join(__dirname, 'app.js')
console.log(fileLocation)

const fileName = path.basename(fileLocation);
console.log(fileName);

const fileExt = path.extname(fileName);
console.log(fileExt);