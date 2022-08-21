let fs = require("fs");
let data = fs.readFileSync('fold.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

n=parseInt(readLine());
let arr=[];
let a=0
let middle=Math.floor(n/2);


for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine());
}

let folds=parseInt(readLine());

for(let i=0;i<folds;i++){
    let middle=Math.floor(n/2);
    for(let j=0;j<middle;j++){
       a=arr.pop();
       arr[j]=arr[j]+a;
       n--; 
    }
}
console.log(arr.length);
for(let i=0;i<arr.length;i++){

    console.log(arr[i]);

}