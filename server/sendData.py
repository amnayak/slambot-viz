import json
import urllib2
import random
import requests

# use to send fake data

randData = []
for i in range(144):
    for j in range(144):
        randData.append(random.randint(-1, 1)) #push values from [-1, 1]

print(randData)

payload = {
        'data': randData
}

to = 'http://localhost:3001/data'
r = requests.post(to, data=payload)


print('sent map to ' + to)
print(r)
