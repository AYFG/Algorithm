function solution(phone_number) {
    var answer = '';
    let phone_number_length = phone_number.length;
    phone_number = phone_number.slice(-4)
    answer = phone_number.padStart(phone_number_length,"*")
    
    return answer;
}