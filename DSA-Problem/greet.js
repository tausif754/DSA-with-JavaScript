/*Given a string of the form he…ey of length at most 1000, print the greeting you will respond with, containing twice as many e’s.*/
function hey(str){
    let l=str.length;
    let numberOfE=l-2;
    let greeting="";
    //adding h in front of letter
    greeting=greeting+"h";
    for(let i=1;i<=2*numberOfE;i++){
        greeting=greeting+"e";
    }
    //adding y at the end
    greeting=greeting+"y";
    console.log(greeting);
}
hey("heey");