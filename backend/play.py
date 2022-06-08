z = "<email:'anagh9931@gmail.com'><name:'Anagh Kumar'><id:2>"
item = z.split('<')[1:]
for p in item:
    print(p.split(':')[1].split('>')[0])