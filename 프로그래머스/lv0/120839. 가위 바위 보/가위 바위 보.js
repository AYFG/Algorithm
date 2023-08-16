function solution(rsp) {
    var obj = {
        "0" : 5,
        "2" : 0,
        "5" : 2
    }
    return rsp.split('').map((a)=>obj[a]).join("")
}