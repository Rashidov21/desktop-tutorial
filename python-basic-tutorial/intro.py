import pyqrcode
from pyqrcode import QRCode
dest = 'https://pyblog.uz'
myQR = QRCode(dest)
myQR.png('qrcode1.png', scale=8)

