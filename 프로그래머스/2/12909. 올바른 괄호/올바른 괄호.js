function solution(s){
//     var answer = true
//     let stack = []
//     const cnt = s.length;
//     s = s.split("")
//     for(let i = 0; i < cnt; i++){
//         let str = s.shift();
//         stack.push(str);
//         if(stack[stack.length-2] + stack[stack.length-1] === "()"){
//             stack.pop()
//             stack.pop()
//         }
//     }
//     if(stack.length > 0){
//         answer = false
//     }

//     return answer
     let stack = 0;
    const cnt = s.length;
    
    s = s.split('');

    for(i of s){
        if(i === '('){
            stack++;
        } else {
            stack--;
        } 
        if (stack < 0) {
            return false;
        }
    }

    if(stack !== 0){
        return false;
    }

    return true;
}