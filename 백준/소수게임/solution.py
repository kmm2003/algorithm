def prime(n):
    for i in range(2,n):
        if i>(n/i):
            return 1
        if n%i==0:
            return 0
    return 1

N=int(input())
A=set()
B=set()
AB=set()
da=0
gu=0

for i in range(0,N):
    a,b=map(int,input().split())
    if prime(a):
        if len(AB)==0:
            A.add(a)
            AB.add(a)
        else:
            if (a in AB) == True:
                da-=1000
            else:
                A.add(a)
                AB.add(a)
    else:
        tmp=list(B)
        if len(tmp) < 3:
            gu+=1000
        else:
            tmp=sorted(tmp,reverse=True)
            gu+=tmp[2]
    if prime(b):
        if len(AB)==0:
            B.add(b)
            AB.add(b)
        else:
            if (b in AB) ==True:
                gu-=1000
            else:
                B.add(b)
                AB.add(b)
    else:
        tmp=list(A)
        if len(tmp) < 3:
            da+=1000
        else:
            tmp=sorted(tmp,reverse=True)
            da+=tmp[2]
    print('맞춘 소수:', A,B)
    print('현재점수',da,gu)
if da>gu:
    print('소수의 신 갓대웅')
elif da<gu:
    print('소수 마스터 갓규성')
else:
    print('우열을 가릴 수 없음')
