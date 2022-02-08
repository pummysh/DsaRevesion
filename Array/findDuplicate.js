let arr=[1,2,2];
let n=arr.length;
// console.log(arr.length)

if(arr.length<=1){
    console.log(-1);
}else{
    for(let i=0; i<arr.length; i++){
        if(arr[Math.abs(arr[Math.abs(i)])]>0){
            arr[Math.abs(arr[i])]=-1*arr[Math.abs(arr[i])];
    // console.log(arr);

        }else{
            console.log(Math.abs(arr[i]));
        }
    }
    // console.log(arr);
}
