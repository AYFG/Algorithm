function solution(array) {
    let count = 0;
    var answer = array.join("").split("").map((value)=>{
        if(parseInt(value)===7){
            count+=1
        }
    })

    return count;
}