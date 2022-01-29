function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let test=+input[0];
    let line=1;
    for(let i=0;i<test;i++){
        let n=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        arr=arr.sort((a,b)=>a-b);
        
       console.log(arr);

    }
   
  }