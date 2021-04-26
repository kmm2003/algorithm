x,y=[1,1]
N=int(input())
arr=list(input().split())
print(arr)
for i in arr:
    if i=='R':
        if y==N:
            continue
        y+=1
    elif i=='L':
        if y==1:
            continue
        y-=1
    elif i=='U':
        if x==1:
            continue
        x-=1
    elif i=='D':
        if x==N:
            continue
        x+=1
print(x,y)
