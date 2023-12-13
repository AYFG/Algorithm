function solution(my_str, n) {
    let splitStr = my_str.split("")
    var answer = [];
    while(splitStr.length>0){
   resStr = splitStr.splice(0,n).join("");     
        answer.push(resStr);
    }
   
    
    
    return answer;
}