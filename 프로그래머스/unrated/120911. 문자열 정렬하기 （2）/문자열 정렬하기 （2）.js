function solution(my_string) {
    const lower = my_string.toLowerCase()
    const sort = lower.split("").sort().join("")
    var answer = sort;
    return answer;
}