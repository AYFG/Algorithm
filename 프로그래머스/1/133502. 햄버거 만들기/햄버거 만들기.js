function solution(ingredient) {
    var answer = 0;
    let stack = [];
    ingredient.map((v,i)=>{
        stack.push(v);
        if(stack.slice(-4).join("") == 1231){
            answer += 1;
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            
        }
    })
    
    return answer;
}