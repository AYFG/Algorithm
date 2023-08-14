function solution(n) {
    let arr = (n+"").split("")
    return arr.reduce((a,c)=>a+c*1,0)
}