let def=(n)=>{
    for(i=2;i<n;i++){
        if(i>(n/i)){
            return 1
        }
        if(n%i==0){
            return 0
        }
    }
    return 1
}

let main=()=>{
    let N=parseInt(prompt('라운드 수'));
    let A=new Set();
    let B=new Set();
    let da=0;
    let gu=0;
    for(j=0;j<N;j++){
        let [a,b]=prompt('').split(' ');
        a=parseInt(a);
        b=parseInt(b);
        if(def(a)){
            if(A.has(a)==true || B.has(a)==true){
                da-=1000;
            }
            A.add(a);
        }
        else{
            let tmp=Array.from(B);
            tmp=tmp.sort((a,b)=>{
                return b-a
            })
            if(tmp.length<3){
                gu+=1000;
            }
            else{
                gu+=tmp[2];
            }
        }
        if(def(b)){
            if(A.has(b)==true || B.has(b)==true){
                gu-=1000;
            }
            B.add(b);
        }
        else{
            let tmp=Array.from(A);
            tmp=tmp.sort((a,b)=>{
                return b-a
            })
            if(tmp.length<3){
                da+=1000;
            }
            else{
                da+=tmp[2];
            }
        }
        console.log(da,gu);
    }
    if(da>gu){
        console.log('소수의 신 갓대웅');
    }
    else if(da<gu){
        console.log('소수 마스터 갓규성');
    }
    else{
        console.log('우열을 가릴 수 없음');
    }
}

main();
