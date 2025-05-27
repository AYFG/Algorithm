function solution(elements) {
    var answer = 0;
    let arr = [...elements,...elements];
    let deDuplication = new Set();
    
    for(let i = 0; i < elements.length; i++){
        let test = 0;
        for(let j = 1; j < elements.length+1; j++){
            test += arr[i+j];
            // console.log(`i = ${i} + j = ${j} = ${test}`);
            deDuplication.add(test);
        }
    }
    answer = deDuplication.size; 
    return answer;
}