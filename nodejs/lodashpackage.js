const _ =require('lodash');
const inputString=process.argv.slice(2).join(' ');
const capitalizedString=_.startCase(_.toLower(inputString));
console.log(capitalizedString);