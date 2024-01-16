function solution(numbers, direction) {
let trace = numbers.length
let answer = [];
    if(direction==="right"){
        numbers.unshift(numbers[trace-1])
        numbers.pop()
        answer = numbers
    }else if(direction === "left"){
        numbers.push(numbers[0])
        numbers.shift()
        answer = numbers
    }
return answer
    }
    
