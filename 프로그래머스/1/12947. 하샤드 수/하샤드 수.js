function solution(x) {
    var answer = true;
    let y = 0;
    [...x.toString()].map((v)=>{
        y += parseInt(v)
    })
    if(x%y !== 0){
        answer = false;
    }
    return answer;
}