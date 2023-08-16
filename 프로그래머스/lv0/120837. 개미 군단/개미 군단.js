function solution(hp) {
    var answer = 0
    let a = Math.floor(hp /5)
    let b = Math.floor((hp%5)/3)
    let c = Math.floor((hp%5)%3)
    answer = a+b+c
    return answer;
}