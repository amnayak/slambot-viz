import random
import requests

# use to send fake data

randData = []
for i in range(144):
    for j in range(144):
        randData.append(random.randint(-1, 1)) #push values from [-1, 1]

randPos = {
    'x' : random.randint(0, 144),
    'y' : random.randint(0, 144)
}

print(randPos)

payload = {
        'data': randData
}

to = 'http://localhost:3001/data'
r = requests.post(to, data=payload)

print(r)

to = 'http://localhost:3001/robot'
r = requests.post(to, data=randPos)

print(r)
