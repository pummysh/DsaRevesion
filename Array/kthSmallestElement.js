
let arr=[7,10,4,3,3,20,15]
let k=0;
arr=arr.sort((a,b)=>a-b);

let count=0;
let l=0;
while(count<=k){
    if(arr[l-1]===arr[l]){
        continue;
    }
    count++;
}

console.log(arr[count-1]);