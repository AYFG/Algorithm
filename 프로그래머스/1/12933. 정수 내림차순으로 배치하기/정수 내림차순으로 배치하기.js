function solution(n) {
    var answer = 0;
    return parseInt([...n.toString()].map(Number).sort((a,b)=>b-a).join(""))
}