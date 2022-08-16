let fs = require("fs");
let data = fs.readFileSync('mean.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let number=parseInt(readLine());

let values=readLine().split(" ");
let mean=0;
let sum=0;

for(let i=0;i<number;i++){


    sum=parseInt(values[i])+sum
}
mean=sum/number;
console.log(Math.floor(mean));
