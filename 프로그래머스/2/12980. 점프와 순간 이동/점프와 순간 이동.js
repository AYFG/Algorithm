function solution(n)
{
//     5000 -> 2500 -> 1250 -> 625 -> 312.5
    var ans = 1;
    
    while(n !== 1){
        if(n % 2 !== 0){
            ans += 1;
            n -= 1;
        }else{
            n = n / 2
        }
    }
    return ans;
}