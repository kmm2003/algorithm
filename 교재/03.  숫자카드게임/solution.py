N,M=map(int,input().split())
arr=[list(map(int,input().split()) for i in range(0,N)]
result=[]
for i in arr:
    result.append(min(i))
result.sort(reverse=True)
print(result[0])
