let fs = require("fs");
let data = fs.readFileSync('rev.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=readLine().split("");
let rev="";
let temp=parseInt(n);
let x=n.length;

if(n[0]==='-'){

    rev="-";

}
for(let i=x-1;i>=0;i--){
    
if(i===x-1){
if(n[i]==='0'){
    x=x-1;
    
    continue;
}   
} 
if(n[i]==='-'){

    continue;

}
rev=rev+n[i];

}
if(x===0){
    console.log(parseInt(temp));
}else {
console.log(parseInt(rev));
}