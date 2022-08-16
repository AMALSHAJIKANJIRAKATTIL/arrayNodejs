let fs = require("fs");
let data = fs.readFileSync('clocksum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let values=readLine().split(" ");

let sum=0;

for(let i=0;i<values.length;i++){

sum=sum+parseInt(values[i]);


}
if(sum<=12){
    console.log(sum);
    }
else if(sum>12){

    sum=sum%12;
    if(sum===0){

        sum=12;
        

    }
    console.log(sum);
} 

