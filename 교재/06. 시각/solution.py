N=int(input())
count=0
if N < 13:
    count=N*1575+1*3600
elif N < 23:
    count=(N-1)*1575+2*3600
else:
    count=(N-2)*1575+3*3600
print(count)
