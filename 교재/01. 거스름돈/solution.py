N=int(input('거슬러줘야 하는 돈\n'))
count=0
coin=[500,100,50,10]
for i in coin:
    count+=math.floor(N/i)
    N=path.floor(N%i)
print(count)
