function solution(brown, yellow) {
    var answer = [];
    let height = 1;
    let brown_width =  yellow / height + 2 // 갈색 너비 = 노랑 너비 +2
    
    while((brown_width*2) + (height*2) !== brown ){
        height++;
        brown_width = yellow / height + 2
        console.log(`brown_width = ${brown_width}`)
        console.log(height)
    }
    answer.push(brown_width)
    answer.push(height+2)
    return answer;
}