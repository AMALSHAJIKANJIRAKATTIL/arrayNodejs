let fs = require("fs");
let data = fs.readFileSync('diagonal.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());
let str="";
let arr=[];

for(let i=0;i<n;i++){
arr[i]=readLine().split(" ");
}

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){

        arr[i][j]=parseInt(arr[i][j]);
        
        if(i===j){
        if(arr[i][j]<0){
            arr[i][j]=0;
            continue;
        }

        if(arr[i][j]>=0){
            arr[i][j]=1;
        }
    }
    }
    }

for(let i=0;i<n;i++){

    for(let j=0;j<n;j++){
        str=str+arr[i][j]+" ";
    }
    
    console.log(str);
    str="";

}

