let fs = require("fs");
let data = fs.readFileSync('goodpairs.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let values=readLine().split(" ");
let count=0;

for(let i=0;i<values.length;i++){

let num=values[i];
for(let j=i+1;j<values.length;j++){

if(num===values[j]){

count++;


}

}


}

console.log(count);