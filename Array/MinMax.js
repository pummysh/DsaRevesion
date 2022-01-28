let arr=[5,3,1,6,8,9];

let l=0;

let h=arr.length-1;

let max=findMax(arr,l,h);
console.log(max);

let min=findMin(arr,l,h);
console.log(min);

function findMax(arr,l,h){
    let max=-Infinity;
    while(l<=h){
        max=Math.max(max,arr[l],arr[h]);
        l++;
        h--;
    }
    return max;
}

function findMin(arr,l,h){
    let min=Infinity;
    while(l<=h){
        min=Math.min(min,arr[l],arr[h]);
        l++;
        h--;
    }
    return min;
}