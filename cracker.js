let fs = require("fs");
let data = fs.readFileSync('cracker.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let values=readLine().split(" ");

let n=parseInt(values[0]);
let k=parseInt(values[1]);

let rem=n%k;
let result=Math.floor(n/k);

let crackers=Array(k);

for(let i=0;i<k;i++){

crackers[i]=result;

}

for(let j=0;j<rem;j++){

crackers[j]=crackers[j]+1;
rem--;

}

let answer=crackers[0]-crackers[k-1];
console.log(answer);