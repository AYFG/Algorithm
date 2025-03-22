function solution(t, p) {
    var answer = 0;
    let arr = [];
    for(let i = 0; i < t.length; i++){
        if(t.slice(i,i + p.length) <= p && t.slice(i,i + p.length).length == p.length){
           answer++;
           console.log(t.slice(i,i + p.length))
         }
    }
    
    
   
    return answer;
}