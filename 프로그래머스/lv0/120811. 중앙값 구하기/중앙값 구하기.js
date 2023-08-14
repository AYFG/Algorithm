function solution(arr) {
    let answer = 0
    let n = 0
    arr.sort((a,b)=>a-b)
   n = Math.ceil(arr.length/2)
    return arr[n-1]
}