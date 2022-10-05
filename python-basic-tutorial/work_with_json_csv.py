import csv
import json


# cols = ['Name', 'Age', 'Gender']

# data = [
#     {'Name': 'John', 'Age': '20', 'Gender': 'Male'},
#     {'Name': 'James', 'Age': '28', 'Gender': 'Male'},
#     {'Name': 'Cardi', 'Age': '25', 'Gender': 'Female'}
# ]
# path = "./demo.csv"
# with open(path, 'w') as f:
#     wr = csv.DictWriter(f, fieldnames=cols)
#     wr.writeheader()
#     wr.writerows(data)


# file_path = "./data.csv"

# with open(file_path, "r") as file:
#     r = csv.reader(file)
#     for i in r:
#         print(type(i))
#         print(i)
from drawdata import draw_scatter
draw_scatter()
