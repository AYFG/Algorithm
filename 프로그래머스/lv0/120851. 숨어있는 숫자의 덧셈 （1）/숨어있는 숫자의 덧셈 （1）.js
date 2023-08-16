function solution(my_string) {
    var answer = my_string.split("").filter((a)=>!isNaN(a)).map((a)=>a*1).reduce((a,c)=>a+c,0)
    return answer;
}