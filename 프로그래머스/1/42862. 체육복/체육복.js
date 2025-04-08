function solution(n, lost, reserve) {
    let answer = 0;
    let obj = {};

    // 겹치는 학생 제거
    let realLost = lost.filter(v => !reserve.includes(v));
    let realReserve = reserve.filter(v => !lost.includes(v));

    // 1. 초기값 세팅
    for (let i = 1; i <= n; i++) {
        obj[i] = 1;
    }

    // 2. 도난 처리
    realLost.forEach(v => {
        obj[v] -= 1;
    });

    // 3. 여벌 처리
    realReserve.forEach(v => {
        obj[v] += 1;
    });

    // 4. 체육복 빌려주기
    for (let i = 1; i <= n; i++) {
        if (obj[i] === 0) {
            if (obj[i - 1] === 2) {
                obj[i - 1] -= 1;
                obj[i] += 1;
            } else if (obj[i + 1] === 2) {
                obj[i + 1] -= 1;
                obj[i] += 1;
            }
        }
    }

    // 5. 체육복 있는 학생 수 세기
    for (let i = 1; i <= n; i++) {
        if (obj[i] >= 1) answer++;
    }

    return answer;
}
