function solution(s) {
    var answer = [];
    let changeCount = 0;
    let zeroCount = 0;
    const regex = /0/g
    // console.log(s)
    while(s.length !== 1){
    let original = s;
    s = s.replace(regex,"")
    zeroCount += original.length - s.length
    // console.log(`zeroCount = ${zeroCount}`)
    // console.log(`s = ${s}`)
    s = s.length
    // console.log(`s = ${s}`)
    s = s.toString(2)
    // console.log(`s = ${s}`)
    changeCount++
    // console.log(`changeCount = ${changeCount}`)
    }
    answer.push(changeCount)
    answer.push(zeroCount)
    // s = s.replace(regex,"")
    // console.log(s)
    // s = s.length
    // console.log(s)
    // s = s.toString(2)
    // console.log(s)
    // s = s.replace(regex,"")
    // console.log(s)
    // s = s.length
    // console.log(s)
    // s = s.toString(2)
    // console.log(s)
    // s = s.replace(regex,"")
    // console.log(s)
    
    return answer;
}