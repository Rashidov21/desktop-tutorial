# -*- coding: utf-8 -*-
import hashlib

h = hashlib.md5(b'password')
o = h.hexdigest()
print(o)