function solution(num_str) {
    var answer = 0;
    let numb = [...num_str]
    numb.map((v)=>{
        answer += parseInt(v)
    })
    return answer;
}