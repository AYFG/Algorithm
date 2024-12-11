function solution(s) {
    var answer = '';
    console.log(parseInt(s.length / 2))
    
    if(s.length % 2 !== 0){
        answer += s[parseInt(s.length / 2)];
    }else{
        answer += s[parseInt(s.length / 2) -1];
        answer += s[parseInt(s.length / 2)];
    }
    return answer;
}
// a
// asd 1
// asdfg 2
// asdfghj 3
// asdfghjkl 4

// qwer 1,2
// qwerty 2,3