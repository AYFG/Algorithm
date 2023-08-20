function solution(num, k) {
    
    var answer = 0
    if([...String(num)].map(Number).indexOf(k) >= 0){
        answer = [...String(num)].map(Number).indexOf(k)+1
    }else{
        answer = [...String(num)].map(Number).indexOf(k)
    }
        
    
    return answer;
}