//# Process String
//INPUT-ABC65D19HY09
//OUTPUT-34671011
function processString(str){
    let l=str.length;
    let ans="";
    for(let i=0;i<l;i++){
        if(str[i]>="0" && str[i]<="9")
        ans=ans.push(str[i]);
    }
    return ans;
}
// console.log(processString("ABC65D19HY09"));
processString("ABC65D19HY09");