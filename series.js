let fs = require("fs");
let data = fs.readFileSync('series.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine());

let series=0;

for(let i=1;i<=n;i++){

series=series+i;

}

console.log(series);
