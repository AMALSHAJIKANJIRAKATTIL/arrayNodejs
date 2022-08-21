let fs = require("fs");
let data = fs.readFileSync('pixel.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());
let mpixel=[];
let a=0;
let count=0;
for(let i=0;i<n;i++){
    a=parseInt(readLine());
    if(a>=0 && a<=255){
        mpixel[i]=a;
    }
}
let m=parseInt(readLine());
let ipixel=[];
for(let i=0;i<m;i++){
    a=parseInt(readLine());
    if(a>=0 && a<=255){
        ipixel[i]=a;
    }
}
let ipixel1=ipixel.toString();
let y=0;
a=0;
for(let i=0;i<n;i++){
    a=mpixel.indexOf(ipixel[0],a);
    if(a!=-1){
        y=mpixel.splice(a,m).toString();
        if(y===ipixel1){
         count++;
        }
}
}
console.log(count);