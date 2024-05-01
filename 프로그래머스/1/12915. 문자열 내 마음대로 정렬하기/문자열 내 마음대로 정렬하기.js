function solution(strings, n) {
    var answer;
    for(let i = 0; i <strings.length; i++){
        strings[i] = strings[i][n] + strings[i]
    }
    
    answer = strings.sort();
    
    for (let j = 0; j < strings.length; j++){
       answer[j] = answer[j].replace(answer[j][0],"")
    }
    return answer;
}