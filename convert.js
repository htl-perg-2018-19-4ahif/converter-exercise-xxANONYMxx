const convert = require('convert-units');
if(isNaN(process.argv[2]) || process.argv[4] != "to"){
    console.log('Error');
}
else{
    console.log(process.argv[2] + " " + process.argv[3] + " are " + convert(process.argv[2]).from(process.argv[3]).to(process.argv[5] + process.argv[5]));
}