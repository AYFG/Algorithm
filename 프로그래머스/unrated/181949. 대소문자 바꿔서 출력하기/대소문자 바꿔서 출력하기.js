const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let box = [];
    str = input[0].split("").map((v)=>{
        if(v===v.toUpperCase()){
            box.push(v.toLowerCase());
        }else if(v===v.toLowerCase()){
            box.push(v.toUpperCase())
        }
    });
    console.log(box.join(""))
});