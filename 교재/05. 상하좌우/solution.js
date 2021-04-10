let main=()=>{
    let [x,y]=[1,1]; // x,y 좌표
    let N=parseInt(prompt(''));
    let arr=prompt('').split(' '); // 입력값
    for(let v of arr){
        switch(v){
            case 'R': // y값이 최대값(N)일 경우 다음으로 넘어감
                if(y==N){
                    continue
                }
                y++;
                break
            case 'L': // y값이 최소값(1)일 경우 다음으로 넘어감
                if(y==1){
                    continue
                }
                y--;
                break
            case 'U': // x값이 최소값(1)일 경우 다음으로 넘어감
                if(x==1){
                    continue
                }
                x--;
                break
            case 'D': // x값이 최대값(N)일 경우 다음으로 넘어감
                if(x==N){
                    continue
                }
                x++;
                break
        }
    }
    console.log(x,y);
}

main();

/*
이번 문제의 핵심은 입력값에 따른 이동 후 좌표의 최종 목적지 좌표를 구하는 것을 프로그램으로 구현
하는 것이 핵심이였다.
*/
