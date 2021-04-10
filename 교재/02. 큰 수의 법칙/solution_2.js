let main=()=>{
    let [N,M,K]=prompt('').split(' ');
    let index=[];
    let result=0;
    let count=0; // 가장 큰 수를 연속으로 사용한 횟수를 카운팅하는 변수
    for(i=0;i<N;i++){
        let tmp=prompt(`${i+1}번째 숫자`);
        index.push(tmp);
    }
    index=index.sort((a,b)=>{ // 내림차순 정렬
        return b-a
    })
    index=[index[0],index[1]];
    while(M!=0){
        if(count==K){ // 가장 큰 수를 K번 사용 시 두 번째로 큰수를 이용하여 연산
            result+=parseInt(index[1]);
            M--;
            count=0;
            continue
        }
        result+=parseInt(index[0]);
        M--;
        count++;
    }
    console.log(result);
}

main();

/*
이번 문제의 핵심은
1. 배열의 숫자들 중 가장 큰 두 개의 숫자만을 연산과정에서 사용한다는 것
2. 연산 과정에서 한 숫자만 연속으로 K번 사용가능하기 때문에 가장 큰 숫자 K번 사용 후에는
두 번째로 큰 숫자를 한 번만 사용하고 다시 가장 큰 숫자를 사용해도 된다는 것

위 두 가지가 1차적인 핵심이였고
위 코드는 두 가지 포인트를 아주 잘 캐치했다.

그러나 핵심 2번을 좀 더 효율적으로 코드로 구현했다면 좋았을 것이다. (A.js 참고)
*/
