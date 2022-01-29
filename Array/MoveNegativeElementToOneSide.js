let arr=[ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
let n=arr.length;
let ans=rearrange(arr,n)
console.log(ans);


// function rearrange(arr,n){
//     let j=0;

//     for(let i=0;i<n;i++){
//         if(arr[i]<0){
//             if(i!=j){
//                 [arr[i],arr[j]]=[arr[j],arr[i]];
//             }
//             j++;
//         }
//     }
//     return arr;
// }

//using two pointers 

function rearrange(arr,n){
    let l=0;
    let h=n-1;

    while(l<=h){
        if(arr[l]<0 && arr[h]<0){
            l++;
        }else if(arr[l]>0 && arr[h]<0){
            [arr[l],arr[h]]=[arr[h],arr[l]];
        }else if(arr[l]>0 && arr[h]>0){
            h--;
        }else{
            l++;
            h--;
        }
    }
    return arr;
}