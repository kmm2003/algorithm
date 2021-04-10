min,max=map(int,input().split())
ss=[4]
cnt=max-min+1
tmp=0
result=set()
for i in range(3,int(max**0.5)+1):
    tmp=i**2
    for j in ss:
        m=(j**0.5)
        if m>(i/m):
            ss.append(tmp)
            break
        if tmp!=j and (tmp%j)==0:
            break

for i in ss:
    tmp=int(min/i)*i
    if min!=tmp:
        tmp+=i
    while(tmp<=max):
        result.add(tmp)
        tmp+=i

result=list(result)
print(cnt-len(result))