let main=()=>{
    let N=prompt('거슬러줘야 하는 돈');
    let count=0;
    while(Math.floor(N/500)!=0){ // 거스름돈중 500원 갯수 카운팅
        count++;
        N=N-500;
    }
    while(Math.floor(N/100)!=0){ // 거스름돈중 100원 갯수 카운팅
        count++;
        N=N-100;
    }
    while(Math.floor(N/50)!=0){ // 거스름돈중 50원 갯수 카운팅
        count++;
        N=N-50;
    }
    while(Math.floor(N/10)!=0){ // 거스름돈중 10원 갯수 카운팅
        count++;
        N=N-10;
    }
    console.log('손님이 받은 동전의 최소 갯수 :',count);
}

main();

/*
거스름돈으로 동전을 최소의 갯수로 줘야하는 문제로
이번 문제의 핵심은 가장 큰 동전부터 거슬러 준다는 것이 핵심이다.

위 코드는 이러한 핵심은 잘 잡았으나 도전 한 개당 한번 씩 카운팅을 함으로써
비효율적이고 시간이 낭비되는 코드가 됐다.
*/
