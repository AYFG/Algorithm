const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(Number);
}).on('close', function () {
    for (let i = 0; i < input[0]; i++) {
        let stars = '';
        for (let j = 0; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
});