let fs = require("fs");
let data = fs.readFileSync('armstrong.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let number=readLine().split("");
let temp=0;
let sum=0;

for(let i=0;i<number.length;i++){

    sum=sum+(number[i]**3);
    temp=temp+number[i];

}


temp=parseInt(temp);
if(sum===temp){
    console.log("Yes");
}else{
    console.log("No");
}