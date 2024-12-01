function solution(n) {
    var answer = 0;
    let root = Math.sqrt(n)
    answer = Math.pow(root+1 ,2)
    if(!Number.isInteger(answer)){
        answer = -1
    }
    return answer;
}