// function solution(n) {
//     var answer = 0;
//     let count = 0;
//     for(let i = 0; i <= n; i++){
//         // console.log(i)
//         for(let j = i + 1; j <= n; j++){
//             count += j
            
//             if(count > n){
//                 count = 0;
//                 break;
//             }
            
//             if(count == n){
//                 count = 0;
//                 answer += 1;
//                 break;
//             }
//         }
//     }
//     return answer;
// }
// 테스트 1 〉	통과 (2.50ms, 36.2MB)
// 테스트 2 〉	통과 (1.66ms, 36.3MB)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	통과 (1.55ms, 36.4MB)
// 테스트 5 〉	통과 (1.65ms, 36.2MB)
// 테스트 6 〉	실패 (시간 초과)

function solution(n) {
    var answer = 0;
    let count = 0;
    for(let i = 0; i <= n; i++){
        // console.log(i)
        for(let j = i + 1; j <= n; j++){
            count += j
            
            if(count > n){
                count = 0;
                break;
            }
            
            if(count == n){
                count = 0;
                answer += 1;
                break;
            }
        }
    }
    return answer;
}