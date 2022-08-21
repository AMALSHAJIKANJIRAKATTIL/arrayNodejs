let fs = require("fs");
let data = fs.readFileSync('prime.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let l=parseInt(readLine());

let prime=true;
for(let x=0;x<l;x++){
    let prime=true;
    let n=parseInt(readLine());
if(n===1){

    prime=false;
    
}else{

for(let i=2;i<n;i++){

if(n%i===0){
prime=false;
break;

}

}
}

if(prime===true){
console.log("Yes")
}else{
    console.log("No");
}}