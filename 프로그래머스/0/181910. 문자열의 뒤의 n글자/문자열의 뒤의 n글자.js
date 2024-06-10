function solution(my_string, n) {
    const startIndex = my_string.length-n
    const answer = my_string.slice(startIndex,my_string.length)
    return answer
}