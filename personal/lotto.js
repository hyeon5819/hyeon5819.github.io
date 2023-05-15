function lotto() {
    const lottoSimulations = document.getElementById("lottoSimulations")
    let want_cnt = lottoSimulations.value
    if (want_cnt == 0) {
        want_cnt = 1
    }
    console.log(want_cnt)
    const simulationsCount = document.getElementById('count')
    simulationsCount.innerText = want_cnt +"회 시뮬레이션 결과!"

    // 숫자 리스트
    let num_list = Array.from(Array(45), (_, i) => i + 1);

    // 회차
    let count = 0;

    // 반복한 시뮬레이션 당첨번호 (리스트안에 리스트 형식)
    let simuls = [];

    // 각 번호 당첨횟수 카운트 맵 (key=각번호, value= 나온 횟수, 기본값 0)
    let num_count = new Map();
    for (let i = 0; i < num_list.length; i++) {
        num_count.set(num_list[i], 0);
    }

    // n회까지 시뮬레이션
    while (count < want_cnt) {
        // 랜덤하게 6개 선택
        let sample_list = num_list.sort(() => 0.5 - Math.random()).slice(0, 6);
        simuls.push(sample_list);
        count += 1;
        // if (count == 1000) {
        //     console.log(count + '회차까지 실행 완료');
        //     return;
        // }
    }

    // n회 시뮬레이션 한 당첨번호에서 각 번호들이 나온 횟수 카운트
    for (let row of simuls) {
        for (let num_cnt of row) {
            if (num_count.has(num_cnt)) {
                num_count.set(num_cnt, num_count.get(num_cnt) + 1);
            } else {
                num_count.set(num_cnt, 1);
            }
        }
    }

    // 나온 횟수가 가장 많은 것부터 순서대로 6개 추출
    // value값 기준 내림차순 정렬
    let sorted_dict = new Map(
        [...num_count.entries()].sort((a, b) => b[1] - a[1])
    );

    // 많이 나온 순서대로 6개 가져오기
    let most6 = Array.from(sorted_dict).slice(0, 6);

    // 마지막에 출력할 선택 번호 리스트
    let select_nums = [];

    // 회차 실행완료 출력
    console.log(count + '회차까지 실행 완료');

    // 결과값 보고
    const resultStr = document.getElementById('resultStr')
    let inum = 0 
    for (let xx of most6) {
        const resltStrlist = document.getElementById(`result${inum}`)
        select_nums.push(xx[0]);
        console.log(`번호: ${xx[0]}, 나온 횟수: ${xx[1]}`);
        resltStrlist.innerText = `번호: ${xx[0]}, 나온 횟수: ${xx[1]}`
        resultStr.appendChild(resltStrlist)
        inum += 1
    }

    // 보기좋게 선택번호 나열
    select_nums.sort(function (a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });
    console.log(select_nums);

    for (let i = 0; i < select_nums.length; i++) {
        const num_ball = document.getElementById(`num${i}`)
        num_ball.setAttribute('class', 'mybtn')
        if (select_nums[i] >= 1 && select_nums[i] <= 10) {
            num_ball.setAttribute('style', "font-size: large;")
            num_ball.setAttribute('class', "ball y1")
        }
        else if (select_nums[i] >= 11 && select_nums[i] <= 20) {
            num_ball.setAttribute('style', "font-size: large;")
            num_ball.setAttribute('class', "ball b1")
        }
        else if (select_nums[i] >= 21 && select_nums[i] <= 30) {
            num_ball.setAttribute('style', "font-size: large;")
            num_ball.setAttribute('class', "ball r1")
        }
        else if (select_nums[i] >= 31 && select_nums[i] <= 40) {
            num_ball.setAttribute('style', "font-size: large;")
            num_ball.setAttribute('class', "ball k1")
        }
        else if (select_nums[i] >= 41 && select_nums[i] <= 45) {
            num_ball.setAttribute('style', "font-size: large;")
            num_ball.setAttribute('class', "ball g1")
        }
        num_ball.innerText = select_nums[i]
    };
}

// 원하는 회차 입력 기능 알림형
// let want_cnt = parseInt(prompt('원하는 회차 입력'));
// lotto(want_cnt);

window.onload = () => {
    console.log('로또 시뮬레이션')
}
