function solution(numbers) {
    var answer = 0;
    let arr = [1,2,3,4,5,6,7,8,9];
    let arr2 = arr.filter((arrValue)=> !numbers.includes(arrValue));
    arr2.map((v)=>{
        answer += v
    })
        
    return answer;
}