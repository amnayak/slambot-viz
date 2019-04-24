import random
import requests
import os

server = (os.getenv('SERVER', 'http://localhost:3001'))

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

to = server + '/data'
r = requests.post(to, data=payload)

print(r)

to = server + '/robot'
r = requests.post(to, data=randPos)

print(r)
