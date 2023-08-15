function solution(my_string) {
    var answer =[]
    for(let i = 0 ; i < my_string.length; i++){
        let stringNumberfilter = my_string[i];
        if(!isNaN(parseInt(stringNumberfilter))){
            answer.push(parseInt(stringNumberfilter))
                answer.sort((a,b)=>a-b)
        }
    }
    return answer;
}
