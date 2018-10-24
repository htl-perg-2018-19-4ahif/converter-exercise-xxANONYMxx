const convert = require('convert-units');
if(isNaN(process.argv[2]) || process.argv[4] != "to"){
    console.log('Error');
}
else{
    console.log(convert(process.argv[2]).from(process.argv[3]).to(process.argv[5]));
}