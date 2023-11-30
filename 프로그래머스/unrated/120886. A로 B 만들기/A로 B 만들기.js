function solution(before, after) {
    const beforeSort = before.split("").sort().join("");
    const afterSort = after.split("").sort().join("");
    if(beforeSort === afterSort){
        return 1;
    }else{
        return 0;
    }
    
}