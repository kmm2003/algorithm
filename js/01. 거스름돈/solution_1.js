let main=()=>{
    let N=prompt('거슬러줘야 하는 돈');
    let count=0;
    let coin=[500,100,50,10];
    for(let i in coin){
        count+=Math.floor(N/i); // 나누기를 이용하여 한번에 단위 별 동전 갯수를 구한다.
        N=Math.floor(N%i); // 카운트한 돈 제외 나머지 돈 계산 과정
    }
}

main();

/*
위 코드의 경우 B.js 코드와는 다르게
한번씩의 계산으로 각 단위별 동전의 갯수를 구해줌으로써
더 효율적이고 빠른 코드가 완성됐다.
*/
