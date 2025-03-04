// 테스트 11 〉	실패 (시간 초과)
// 테스트 12 〉	실패 (시간 초과)
// 테스트 13 〉	실패 (시간 초과)
// 테스트 14 〉	실패 (시간 초과)
// 테스트 15 〉	실패 (시간 초과)
// 테스트 16 〉	실패 (시간 초과)
// 테스트 18 〉	실패 (시간 초과)
// 테스트 24 〉	실패 (시간 초과)
// 테스트 25 〉	실패 (시간 초과)

// function solution(number, limit, power) {
//     var answer = 0;
//     let obj = {};
//     let count = 0;
    
//     for(let i = 1; i <= number; i++){
//         // 각 키의 value 0으로 초기화
//         obj[i] = 0;
//         // 각 키의 약수 개수를 value로
//         for(let j = 1; j <= i;j++){
//             if(i % j == 0){
//                 obj[i] += 1;
//             }
//         }
//     }
    
// //     value(약수개수)들을 돌면서 limit보다 큰 수는 power로 변경
//     Object.values(obj).map((v,i)=>{
//         if(limit < v){
//             v = power
//         }
//         count += v
//     })
    
//     return count;
// }

function solution(number, limit, power) {
    var answer = 0;
    let obj = {};
    
    for(let i = 1; i <= number; i++){
        obj[i] = 0;
        for(let j = 1; j <= parseInt(Math.sqrt(i)); j++){
            if(i % j == 0){
                obj[i] += 1;
                if (j !== i / j){
                    obj[i] += 1
                }
            }
        }
    }
    Object.values(obj).map((v,i)=>{
        if(limit < v){
            v = power
        }
        answer += v
    })
    
    return answer;

}
