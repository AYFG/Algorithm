function solution(n, numlist) {
    var answer = numlist.filter((numlist)=>numlist%n ===0);
    return answer;
}