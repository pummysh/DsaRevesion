let arr=[3,4,5,6,7];
let l=0;
let h=4;

function findMin(arr,l,h){
    while(l<=h){
        let mid=Math.floor(l+(h-l) / 2);
        if(arr[mid]>arr[mid+1]){
            return mid+1;
        }else if(arr[mid-1]>arr[mid]){
            return mid;
        }else if(arr[l]<=arr[mid]){
            l=mid+1;
        }else{
            h=mid-1;
        }
    }
    return -1;
}

let index=findMin(arr,l,h);

if(index<0){
    console.log(0);
}else{
    console.log(arr.length-index);
}

