function solution(arr) {
    var answer = 0;
    for(let i = 0; i < arr.length; i++){
        answer += arr[i];
        console.log(answer);
    }
    answer = answer / arr.length
    return answer;
}