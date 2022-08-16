let fs = require("fs");
let data = fs.readFileSync('seat.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());
let values=[];
for(let i=0;i<n;i++){

    values=readLine().split(" ");
    

    let s=parseInt(values[1]);
    let b=parseInt(values[0]);

    if(b>72){
    console.log("Invalid");
    continue;
}
    if (s > 0 && s <= b)
        if (s % 8 == 1 ||
            s % 8 == 4)
        console.log("L");
        else if (s % 8 == 2 ||
                 s % 8 == 5)
            console.log("M");
        else if(s % 8 == 3 ||
                 s % 8 == 6)
                 console.log("U");
        else if(s % 8 == 7)
        console.log("SL");
        else
        console.log("SU");
    else
        console.log("Invalid");

    
        }


