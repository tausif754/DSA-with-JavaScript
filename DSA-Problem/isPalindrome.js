function isPalindrome(s){
    let n=s.length;
    let i=0;
    let j=n-1;
    while(i<j){
        if(s[i]!=s[j]){
            return false;
        }
        i++;
        j--;
        return true;
    }
}
console.log(isPalindrome("abccba"));//output is true