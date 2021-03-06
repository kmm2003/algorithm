let main=()=>{
    let [N,K]=prompt('').split(' ');
    let count=0;
    while(N>1){
        if(N%K==0){ // N이 K로 나누어 떨어질 경우
            N/=K;
            count++;
        }
        else{ // 나누어 떨어지지 않을 경우
            count+=parseInt(N%K);
            N-=parseInt(N%K);
        }
    }
    if(N==0){ // N이 0이 되는 경우 문제에서는 1로 끝나야 하기 때문에 count 1개 제거
        count--;
    }
    console.log(count);
}

main();

/*
이번 문제의 핵심은 나누어 떨어지는 경우와 그렇지 않은 경우를 확실하게 구별하여
1이 될때까지 연산하여 카운팅 하는 것이다.

위 코드의 경우 나누어 떨어지지 않을때의 연산을 단순히 1씩 빼는 것이 아니라
나머지 값을 이용해 한번에 연산을 해주어 더 효율적이고 빠른 코드가 됐다.
(단순히 1씩 뺄 경우 N값이 커지면 빠른 시간안에 프로그램을 실행하지 못한다.)
*/
