function solution(num_list) {
    var answer = [];
    answer = num_list
    // console.log(num_list[num_list.length-1])
    if(num_list[num_list.length-2] < num_list[num_list.length-1]){
        answer.push(num_list[num_list.length-1] - num_list[num_list.length-2])
    }else{
       answer.push(num_list[num_list.length-1]*2) 
    }
    return answer;
}