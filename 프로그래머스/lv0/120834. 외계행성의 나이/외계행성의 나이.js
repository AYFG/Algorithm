function solution(age) {
    return age.toString().split("").map((a)=>"abcdefghij"[a]).join("");
}