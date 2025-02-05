// https://www.youtube.com/watch?v=ShXeNmIHtB0&t=332s
function solution(a, b, n) {
    var answer = 0;
    let count = 0;
    while(n>=a){
        count = Math.floor(n / a ) * b;
        answer += count;
        n = n % a + count;
    }
    return answer;
}