function solution(i, j, k) {
    let count = 0;

    for (let num = i; num <= j; num++) {
        const numStr = num.toString();
        count += (numStr.match(new RegExp(k, 'g')) || []).length;
    }

    return count;
}