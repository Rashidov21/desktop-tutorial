

w = "alccdvcdcvdddla"
r = 0
r_text = ""
l = []
for i in w:
    ow = w[w.index(i):]
    if i in ow:
        r = w.count(i)
        t = f"{i}{r}"
    l.append(t)

print("".join(list(set(l))))
