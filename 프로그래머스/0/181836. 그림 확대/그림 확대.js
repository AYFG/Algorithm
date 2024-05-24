function solution(picture, k) {
    let answer=[]
    picture.map((v,i)=>{
        const arr = [...v].map((v,i) => v.repeat(k)).join('')
        for(let i = 0; i<k;i++){
        answer.push(arr)    
        }
    })
    return answer
}