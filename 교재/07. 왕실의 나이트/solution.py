nite=input()
x=ord(nite[0])-96
y=int(nite[1])
xx=0 # 이동 후 x축 좌표
yy=0 # 이동 후 y축 좌표
count=0
arr=[[-2,1],[-2,-1],[-1,2],[-1,-2],[1,2],[1,-2],[2,1],[2,-1]] # 나이트가 이동할 좌표의 모든 경우
for i in arr:
    xx=x+i[0]
    yy=y+i[1]
    if xx > 8 or xx < 1 or yy>8 or yy<1: # 이동 후 나이트의 x,y축 좌표가 이동할 수 없는 좌표인 경우
        continue
    count+=1
print(count)

'''
규칙에 의하면 수직 2칸 -> 수평 1칸 or 수평 2칸 -> 수직 1칸 이동을 할 수 있다.

이때, 수평을 x축, 수직을 y축 이라고 가정할때 위 규칙을 표현해보면
x축 1칸 이동시에는 y축을 2칸이동, x축을 2칸 이동시에는 y축을 1칸 이동하면 된다는 의미이고
이것을 좌표화하여 배열로 만들면 [-2,1],[-2,-1],[-1,2],[-1,-2],[1,2],[1,-2],[2,1],[2,-1]
위와 같이 총 8가지의 경우의 수가 생긴다.

따라서 위의 8가지의 이동좌표를 배열로 만든 후
처음에 입력한 나이트의 위치좌표랑 하나씩 연산을하여
연산결과가 나이트 판안에 위치하는지 즉, 나이트 밖으로 나가는지 확인하여 판별 후
나이트 판안에 위치하는 경우만 카운팅하여 갯수를 세면 문제가 해결된다.
'''
