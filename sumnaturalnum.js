let fs = require("fs");
let data = fs.readFileSync('numsum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n=parseInt(readLine());

let sum=0;



for(let i=1;i<=n;i++){

    sum=sum+i;

}

console.log(sum);
