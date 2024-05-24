function solution(number, limit, power) {
var answer = 0;
let count = 0;
const arr = Array(number+1).fill(0)
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            arr[j]++;
        }
    }
    arr.map((v)=>{
        if(v <= limit){
            count += v
        }else if(v > power){
            count += power
        }
    })
    return count
}