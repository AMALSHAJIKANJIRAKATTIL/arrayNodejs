/*
Lucky Number
Given a sorted array of n integers, a lucky integer is an integer which has a frequency in the array equal to its value.
Return a lucky integer in the array. If there is no lucky integer return -1.
If you have multiple lucky integers, please return the first lucky integer in the array (lucky number with the least index).
Input
First line contains a positive integer n, denoting the number of elements in the array. It is followed by n lines. Each line contains one integer denoting an element in the array.
Output
One line specifying the lucky integer in the array
Example
Input:
4
2
2
3
4
Output:
2
Explanation
First line is 4, i.e. 4 elements in the array. The array is [2,2,3,4]. We can see that number 2 is repeating 2 times hence it is the lucky number which is our output
Submit a solution
*/
let fs = require("fs");
let data = fs.readFileSync('lucky.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());
let arr=[];

let found=false;
let lucky=[];

for(let x=0;x<n;x++){   //read array
    arr[x]=parseInt(readLine());
}


for(let i=0;i<arr.length;i++){
    let count=1;
    for(let j=i+1;j<arr.length;j++){

        if(arr[j]===arr[i]){
        count++
        }
    }
    
    if(count===arr[i]){
        lucky.push(count);
        found=true;
     }

}
if(!found){
    console.log(-1);
}else{
    console.log(lucky[0]);
}