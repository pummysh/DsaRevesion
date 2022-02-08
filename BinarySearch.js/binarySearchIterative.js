function binarySearch(arr,n,k){
    let l=0;
    let h=n-1;

    while(l<=h){
        let mid=l+Math.floor((h-l)/2);
        if(arr[mid]===k){
            return mid;
        }else if(arr[mid]>k){
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
    let arr=input[1].trim().split(" ").map(Number);
    let ans=binarySearch(arr,n,k);
    console.log(ans);
  }

  
  if (process.env.USERNAME === "PUMMY SHARMA") {
    runProgram(`5 2
    1 1 2 2 5`);
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