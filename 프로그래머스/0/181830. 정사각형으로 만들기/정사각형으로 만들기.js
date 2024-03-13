function solution(arr) {
    let result = [...arr]
    let 행길이 = arr.length
    let 열길이 = arr[0].length
    if(열길이 < 행길이){
        result = arr.map((row)=>{
            return [...row,...new Array(행길이 - 열길이).fill(0)]
        })
    }else if(행길이 < 열길이){
        for(let i = arr.length; i<arr[0].length; i++){
        let newRow = new Array(arr[0].length).fill(0);
            result.push(newRow)
        }
    }else if(열길이 === 행길이){
        return result
    }
    return result
}