"""
파일이름: lotto.py
작성자: 이현식
작성일: 2023년 3월 23일

로또 번호 추천 기능입니다.
터미널에서 파이썬파일을 실행하고 원하는 시뮬레이션 횟수를 입력합니다.
입력한 횟수만큼 시뮬레이션을 진행한 뒤 각 번호의 당첨횟수가 가장 많은 6개의 번호를 순서대로 출력해줍니다.
"""
import random


def lotto(want_cnt):
    # 숫자 리스트
    num_list = list(range(1, 46))

    # 회차
    count = 0

    # 반복한 시뮬레이션 당첨번호 (리스트안에 리스트 형식)
    simuls = []

    # 각 번호 당첨횟수 카운트 딕셔너리 (key=각번호, value= 나온 횟수, 기본값 0)
    num_count = {}
    for item in num_list:
        num_count[item] = 0

    # n회까지 시뮬레이션
    while count < int(want_cnt):
        # 랜덤하게 6개 선택
        sample_list = sorted(random.sample(num_list, 6))
        simuls.append(sample_list)
        count += 1
        # if count == 1000:
        #     return
        #     print(str(count)+'회차까지 실행 완료')

    # n회 시뮬레이션 한 당첨번호에서 각 번호들이 나온 횟수 카운트
    for row in simuls:
        for num_cnt in row:
            if num_cnt in num_count:
                num_count[num_cnt] += 1
            else:
                num_count[num_cnt] = 1

    # 나온 횟수가 가장 많은것부터 순서대로 6개 추출
    # value값 기준 내림차순 정렬
    sorted_dict = sorted(num_count.items(), key=lambda x: x[1], reverse=True)

    # 많이 나온 순서대로 6개 가져오기
    most6 = sorted_dict[:6]

    # 마지막에 출력할 선택 번호 리스트
    select_nums = []

    # 회차 실행완료 출력
    print(str(count)+'회차까지 실행 완료')

    # 결과값 보고
    for xx in most6:
        select_nums.append(xx[0])
        print('번호:', xx[0], '나온 횟수:', xx[1])

    # 보기좋게 선택번호 나열
    select_nums.sort()
    print(select_nums)


# 원하는 회차 입력 기능
want_cnt = input()
lotto(want_cnt)
