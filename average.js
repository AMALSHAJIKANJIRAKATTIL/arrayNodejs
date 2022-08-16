let fs = require("fs");
let data = fs.readFileSync('average.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine());

let arr= [];

let sum=0;

for(let i=0;i<n;i++){

arr[i]=parseInt(readLine());    
sum=sum+arr[i];

}

let average=sum/n;
if(average>100){
    console.log("Excellent!");
}else{

    console.log("Not Excellent!")

}