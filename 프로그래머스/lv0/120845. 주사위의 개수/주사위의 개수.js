function solution(box, n) {
    let arr = []
    let answer = 0
    for(let i = 0; i<box.length;i++){
        arr.push(Math.floor(box[i] / n))
        answer = arr.reduce((a,c)=>a*c)
    }
    return answer;
}