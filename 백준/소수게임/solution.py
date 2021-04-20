def prime(n):
    if n < 2:
        return 0
    for i in range(2,n):
        if i>(n/i):
            return 1
        if n%i==0:
            return 0
    return 1

N=int(input())
A=[]
B=[]
AB=[]
da=0
gu=0

for i in range(0,N):
    a,b=map(int,input().split())
    if prime(a):
        if (a in AB) == True:
            da-=1000
        else:
            A.append(a)
            AB.append(a)
            if len(A) > 3:
                A=sorted(A)
                del A[0]
            elif len(A) == 3:
                A=sorted(A)
    else:
        if len(B) < 3:
            gu+=1000
        else:
            gu+=B[0]
    if prime(b):
        if (b in AB) ==True:
            gu-=1000
        else:
            B.append(b)
            AB.append(b)
            if len(B) > 3:
                B=sorted(B)
                del B[0]
            elif len(B) == 3:
                B=sorted(B)
    else:
        if len(A) < 3:
            da+=1000
        else:
            da+=A[0]
    print('맞춘 소수:', A,B)
    print('현재점수',da,gu)

if da>gu:
    print('소수의 신 갓대웅')
elif da<gu:
    print('소수 마스터 갓규성')
else:
    print('우열을 가릴 수 없음')