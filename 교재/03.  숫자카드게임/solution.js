let main=()=>{
    let [N,M]=prompt('').split(' ');
    let arr=new Array(N);
    let result=new Array(N);
    for(i=0;i<N;i++){
        arr[i]=new Array(M);
    }
    for(i=0;i<N;i++){
        arr[i]=prompt('').split(' ');
    }
    for(i=0;i<N;i++){
        arr[i]=arr[i].sort();
        result[i]=arr[i][0];
    }
    result=result.sort((a,b)=>{
        return b-a
    })
    console.log(result[0]);
}

main();

/*
이번 문제의 핵심은 각 row에서 최소값을 뽑아내고
최소값들을 비교하여 가장 큰 값을 최종적으로 뽑아내는 것이 핵심이였다.

위 코드는 핵심을 잘 충족했다.
*/
