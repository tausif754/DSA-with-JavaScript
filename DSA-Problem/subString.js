//all substrings of a string
function substrings(str){
    let n=str.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<=n;j++){
            var ans = str.substring(i, j);
            console.log(ans);
            
        }
    }
}
substrings("abc");
//input abc
output 
a
ab
abc
b
bc
c