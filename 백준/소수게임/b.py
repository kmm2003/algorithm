def prime(n):
    for i in range(2,n):
        if i>(n/i):
            return 1
        if n%i==0:
            return 0
    return 1

a=[]
for i in range(4000000,5000000):
    if prime(i):
        a.append(i)
print(a)