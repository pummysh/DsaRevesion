function findIndex(arr,n){
    // console.log(a,n);
    let l=0;
    let h=n-1;

    while(l<h){
        let mid=Math.floor(l+(h-l)/2);
        
        if(arr[mid]>arr[mid+1]){
            return mid+1;
        }else if(arr[mid-1]>arr[mid]){
            return mid;
        }else if(arr[mid]>arr[h]){
            l=mid+1;
        }else{
           h=mid-1;
        }
    }
    return 0;
}
function search(a,l,h,k){
    while(l<=h){
        let mid=Math.floor((l+h)/2);
        if(a[mid]===k){
            
            return mid;
        }else if(a[mid]>k){
            h=mid-1;
        }else{
            l=mid+1;
        }
    }
    return -1;
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let [n,k]=input[0].trim().split(" ").map(Number);
    let a=input[1].trim().split(" ").map(Number);
    let index=findIndex(a,n);
    // console.log(a[index]);
    let left=search(a,0,index-1,k);
    let right=search(a,index,n-1,k);
    if(left===-1 && right===-1){
        console.log(-1);
    }else if(left===-1){
        console.log(right);
    }else{
        console.log(left);
    }
    
   
  }
  if (process.env.USERNAME === "PUMMY SHARMA") {
    runProgram(`6 6
    3 4 7 9 1 2`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }