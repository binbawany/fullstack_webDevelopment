import mymodule1 as mm1
from mymodule1 import person, address
import platform
import datetime
import math as m
import json #convert from json to python dict and vice versa
#from pandas import DataFrame as pd #pip Python install Packages
import CamelCase

print("Sum is:", mm1.add(5, 7))

print("Python Version:", platform.python_version())
#print(dir(platform))

print("Person Details:", person["age"], address)


print("Current Date and Time:", datetime.datetime.now())

year = datetime.datetime.now().year
print("Current Year:", year) #20251209074220486930

#strftime
now = datetime.datetime.now()
formatted_date = now.strftime("%c")
print("Formatted Date and Time:", formatted_date)

print(m.sqrt(81))
print(m.factorial(6))
print(m.pi)
print(m.ceil(4.2))
print(m.floor(4.8))
print(m.pow(2, 5))


myjson = '{"name": "Muzzammil", "age": 25, "city": "Karachi"}'

py_dict = json.loads(myjson)
print("Converted Python Dictionary:", py_dict)
new_json = json.dumps(py_dict)
print("Converted JSON String:", new_json)

#Creating a DataFrame
data = {
    "Name": ["Muzzammil", "Ali", "Ayesha"],
    "Age": [25, 30, 22],
    "City": ["Karachi", "Lahore", "Islamabad"]
}   
#df = pd.DataFrame(data)
#print("DataFrame:\n", df)


cc = CamelCase()
txt = "hello world from muzzammil"
print("CamelCase Text:", cc.hump(txt))
