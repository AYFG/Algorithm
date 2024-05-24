function solution(participant, completion) {
    var answer = '';
    const map1 = new Map();
    for(let key of participant){
        map1.set(key, (map1.get(key) || 0) + 1);
    }
    for (let key of completion) {
        map1.set(key, map1.get(key) - 1);
    }
    for (let [key,value] of map1){
        if(value !== 0){
            return key
        }
    }
}