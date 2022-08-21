let fs = require("fs");
let data = fs.readFileSync('shuffle.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());

let arr=Array(2);
let arr2=Array(n);
let shuffle=[];

for(let i=0;i<2;i++){
    arr2=[];
    for(let j=0;j<n;j++){
        
        arr2[j]=parseInt(readLine());
        
    }
    
    arr[i]=arr2;
    
}

let p=0;
for(let i=0;i<n;i++){
    for(let j=0;j<2;j++){
        shuffle[p]=arr[j][i];
        p++;
    }
}

for(let i=0;i<2*n;i++){
console.log(shuffle[i]);
}