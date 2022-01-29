let a=[1,2,3,4,5];
let b=[1,2,3];
let n=5;
let m=3;

let obj={};
        for(let i=0;i<n;i++){
            obj[a[i]]=1;
        }
        
        
        for(let i=0;i<m;i++){
            if(obj[b[i]]===undefined){
                obj[b[i]]=1;
            }
        }
        
        console.log(Object.keys(obj).length);