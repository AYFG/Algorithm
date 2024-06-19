function solution(n, m, section) {
    var answer = 0;
    let paint = 0;
    
    for(let value of section){
        if(paint < value){
            answer++;
            paint = value + m -1
        }
    }
    
    return answer;
}