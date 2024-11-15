function solution(a, b) {
    let big = Math.max(a,b)
    let small = Math.min(a,b)
    console.log(small)
    let answer=0;
    
    if(big === small){
       answer = big
    }else{
        for(let i = small; i <= big; i++)         {
            answer += i
        }
    }
    return answer
}