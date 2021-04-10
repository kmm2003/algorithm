let main=()=>{
    let [min,max]=prompt('').split(' ')
    min=parseInt(min);
    max=parseInt(max);
    let ss=[];
    let cnt=max-min+1;
    let tmp=0;
    let set=new Set();
    let result=set;
    for(i=2;i<parseInt(max**0.5)+1;i++){ // max 값 이전까지의 소수 제곱값이 담긴 배열 생성
        tmp=i**2;
        ss.push(tmp);
        for(let j of ss){ // 소수인지 판별한 i가 소수배열에 있는 값으로 나눠 떨어지는지 확인
            m=(j**5);
            if(m>(i/m)){ // i/m값이 m보다 작으면 i는 무조건 소수
                break
            }
            if(tmp!=j && (tmp%j)==0){ // 나눠 떨어지면 소수가 아님으로 pop
                ss.pop(tmp);
                break
            }
        }
    }
    console.log(ss);
    for(let i of ss){ // result Set에 범위내에서 삭제할 값들을 모두 넣는다.
        tmp=(parseInt(min/i))*i;
        if(min!=tmp){
            tmp+=i;
        }
        while(tmp<=max){
            result.add(tmp);
            tmp+=i;
        }
    }
    console.log(result)
    console.log('총합',cnt);
    console.log('discount',result.size); // 뺼 값들의 총 갯수
    console.log('정답',cnt-result.size); // 최종 결과
}

main();

/*
이번 문제의 핵심은 다음과 같다.
"소수들의 리스트를 최선으ㅟ 알고리즘으로 빠른 시간내에 구해내는 것"

소수들의 리스트를 구현하는 부분이 시간이 가장 오래 걸리기 때문이다.
일반적인 소수를 구하는 방법을 이용하면 min이 1조인 경우에는 시간내에 절대 구하지 못한다.

따라서 10번 줄 for문 안을 최적화 해줘야 하는데 다음과 같이 최적화를 해주었다.

1. 13번째 줄에서 2 ~ parseInt(max**0.5) 값까지 하나씩 모두 나눠 떨어지는지 연산을 하는 것이 아니라
    그 전 단계에서 구한 소스들로만 나눠떨어지는지 확인함으로써 연산 횟수를 줄이고 있다.

    소수가 아닌 수로 나눠떨어지는 경우에는 어짜피 소수중 반드시 나눠떨어지는 것이 존재하기 때문에 소수로만 확인해줘도 된다.

2. 이번 문제의 가장 핵심인 15번줄인데 i/m 값이 m보다 작은 경우 더 큰 값의 소수로 나눠봤자 나눠떨어지지 않는다.

    ex) i==7, m==3 이라고 가정하면 7/3==2.xx 이고
        2.xx보다 m인 3이 더 크다.

        위 결과가 말하는 의미는 앞으로 무슨 값이 나눠떨어질지 아닐지는 모르나
        만약 i가 나눠 떨어진다면 나눠 떨어지는 최대값이 2라는 의미이다.

        그러나 2이하의 값은 이미 전 단계에서 나눠 떨어지지 않는다고 확정됐기 때문에
        남은 소수값들을 이용해 나눠볼 필요없이 i인 7은 소수라고 확정된다.

        이러한 원리를 이용하면 소수배열을 구할때 연산 횟수가 기하급수적으로 줄어들것이고
        따라서 min값이 1조가 되고 시간안에 프로그램을 실행 할 수 있다.
*/
