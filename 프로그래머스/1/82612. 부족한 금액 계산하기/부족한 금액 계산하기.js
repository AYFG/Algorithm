function solution(price, money, count) {
    var answer = -1;
    let test = 0;
    for(let i = 1; i < count+1; i++){
        test += price * i
    }
    if(money < test){
        return test-money;
    }else{
        return 0;
    }

}