// function recursion (n){
//     if(n===0){
//         return 0;
//     }
//     if(n===1){
//         return 1;
//     }
//     return recursion(n-1) + recursion(n-2) % 1234567
// }
// function solution(n){
//     const remainder = 1234567
//     const recursion = (n) => {
//         if(n===0){
//         return 0;
//     }
//     if(n===1){
//         return 1;
//     }
//     return (recursion(n-1) % remainder + recursion(n-2) % remainder)
//     }
//     return recursion(n)
// }
function solution(n){
    let answer = 0;
    let temp0 = 0;
    let temp1 = 1;
    const remainder = 1234567
    
    for(let i = 2; i <= n; i++){
        // answer = ((temp0 % remainder) + (temp1 % remainder) % remainder);
        answer = (temp0 +temp1) % remainder;
        temp0 = temp1;
        temp1 = answer;
    }
    return answer 
}