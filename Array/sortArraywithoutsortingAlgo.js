
let arr=[0,0,2,2,2,1,1,1];
let N=8;
let count_0=0;
        let count_1=0;
        let count_2=0;
        
        for(let i=0;i<N;i++){
            if(arr[i]===0){
                count_0++;
            }else if(arr[i]===1){
                count_1++;
            }else{
                count_2++;
            }
        }
        //console.log(count_0,count_1,count_2);
        let k=0;
        
        for(let i=0;i<count_0;i++){
            arr[k]=0;
            k++;
        }
        
        for(let i=0;i<count_1;i++){
            arr[k]=1;
            k++;
        }
        
        for(let i=0;i<count_2;i++){
            arr[k]=2;
            k++;
        }
       
        
        console.log(arr);