let fs = require("fs");
const { format } = require("path");
let data = fs.readFileSync('array.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let arr=readLine().split(" ");
let m=parseInt(readLine());
let temp=0;

for(let i=0;i<arr.length;i++){
    arr[i]=parseInt(arr[i]);
}

for(let i=0;i<m;i++){


    for(let j=arr.length-1;j>=0;j--){

        if(j===arr.length-1){
            
            
            temp=arr[j];
            
        }

        arr[j]=arr[j-1];
        

    }
    arr[0]=temp;

}
for(let i=0;i<arr.length;i++){

console.log(arr[i]);

}