let fs = require("fs");
let data = fs.readFileSync('transpose.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());

let arr=[];

let transpose=[];

for(let i=0;i<n;i++){

let values=readLine().split(" ");

arr[i]=values;

}

for(let i=0;i<arr[0].length;i++){

transpose[i]=Array(n);

}



for(let i=0;i<n;i++){

for(let j=0;j<arr[i].length;j++){

    transpose[j][i] = arr[i][j];


}

}
let result="";
for(let i=0;i<transpose.length;i++){
    let result="";
    for(let j=0;j<transpose[0].length;j++){
    
        result=result+transpose[i][j]+" ";
        
    
    }
    console.log(result);
    }
