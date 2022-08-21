let fs = require("fs");
let data = fs.readFileSync('productsum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let product=1;
let sum=0;
let diff=0;
let n=readLine().split("");

for(let i=0;i<n.length;i++){


product=product*parseInt(n[i]);
sum=sum+parseInt(n[i]);

}

diff=product-sum;

console.log(diff);