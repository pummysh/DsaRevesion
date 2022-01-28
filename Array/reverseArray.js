let arr=[1,2,3,4,5];

let l=0;
let h=arr.length-1;

while(l<h){
    [arr[l],arr[h]]=[arr[h],arr[l]];
    l++;
    h--;
}

console.log(arr);