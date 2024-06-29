function solution(n, control) {
    var answer = 0;
    const arr = [...control]
    console.log(arr)
    for(let i = 0 ; i < arr.length; i++){
        console.log(arr[i])
        if(arr[i] == "w"){
            n += 1
        }else if(arr[i] == "s"){
            n -= 1
        }else if(arr[i] == "d"){
            n += 10
        }else if(arr[i] == "a"){
            n -= 10
        }
        answer = n
    }
    return answer;
}