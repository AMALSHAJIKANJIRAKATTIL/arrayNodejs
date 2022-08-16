let fs = require("fs");
let data = fs.readFileSync('max.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let lines=parseInt(readLine());
let max=0;

let arr= [];

for(let i=0;i<lines;i++){
  
  arr[i]=parseInt(readLine());
  max=arr[0];
}

for(let i=0;i<arr.length;i++){

  if(arr[i]>max){
    max=arr[i];
  }else{
    max=max;
  }
 console.log(max);
}

