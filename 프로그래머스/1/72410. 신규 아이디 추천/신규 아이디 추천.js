/**
아이디 length 3이상 15이하
알파벳 소문자, 숫자, -, _, . 사용 가능
처음과 끝에 .사용 불가, 연속 .사용 불가

1. .toLowerCase();
2. .replace(/[^\w-_.]/g,"")
3. .replace(/\.+/g,".")
4. .replace(/^\.|\.$/g,"")
5. .replace(/^$/g,"a")
6. .slice(0,15).replace(/\.$/,"")
7. .padEnd(3,new_id[new_id.length-1])
*/

function solution(new_id) {
    let answer = "";
answer = new_id
.toLowerCase()
.replace(/[^\w-_.]/g,"")
.replace(/\.+/g,".")
.replace(/^\.|\.$/g,"")
.replace(/^$/g,"a")
.slice(0,15).replace(/\.$/,"")

    answer  = answer.padEnd(3,answer[answer.length-1]);
    return answer 
}