let fs = require("fs");
let data = fs.readFileSync('dice.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());

if(1 <= n && n<= 6){
switch(n){
case 1:     console.log(6);
            break;

case 2:     console.log(5);
            break;

case 3:     console.log(4);
            break;

case 4:     console.log(3);
            break;     
            
case 5:     console.log(2);
            break;            

case 6:     console.log(1);
            break;

default:  console.log("error");
            break;
}
}