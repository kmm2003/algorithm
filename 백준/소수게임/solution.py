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
da=0
gu=0
for i in range(0,N):
    a,b=map(int,input().split())
    if prime(a):
        if len(A.union(B))==0:
            A.add(a)
        else:
            tmp=list(A.union(B))
            if a in tmp == True:
                da-=1000
            else:
                A.add(a)
    else:
        tmp=list(B)
        if len(tmp) < 3:
            gu+=1000
        else:
            tmp=tmp.sort(reverse=True)
            gu+=tmp[2]
    if prime(b):
        if len(A.union(B))==0:
            B.add(b)
        else:
            tmp=list(A.union(B))
            if b in tmp ==True:
                gu-=1000
            else:
                B.add(b)
    else:
        tmp=list(A)
        if len(tmp) < 3:
            da+=1000
        else:
            tmp=tmp.sort(reverse=True)
            da+=tmp[2]
if da>gu:
    print('소수의 신 갓대웅')
elif da<gu:
    print('소수 마스터 갓규성')
else:
    print('우열을 가릴 수 없음')