#text str
#Numbers int, float, complex
#Sequence list, tuple, range
#Mapping dict
#Set set, frozenset
#Boolean bool
#Binary bytes, bytearray, memoryview
#NoneType None

name = "Muzzammil" # str
print(type(name))

age = 30 # int
print(type(age))

height = 5.9 # float
print(type(height))

is_student = False # bool
print(type(is_student))

fruits = ["apple", "banana", "cherry"] # list
print(type(fruits))

person = {"name": "Muzzammil", "age": 30} # dict
print(type(person))

numbers = (1, 2, 3) # tuple
print(type(numbers))

unique_numbers = {1, 2, 3} # set
print(type(unique_numbers))

data = None # NoneType
print(type(data))   

file_data = b"Hello, World!" # bytes
print(type(file_data))

byte_array = bytearray(b"Hello") # bytearray
print(type(byte_array))

memory_view = memoryview(b"Hello") # memoryview
print(type(memory_view))

complex_number = 2 + 3j # complex
print(type(complex_number))

range_numbers = range(5) # range
print(type(range_numbers))




object = {"name": "Muzzammil", "age": 30, "height": 5.9, "is_student": False,
          "fruits": ["apple", "banana", "cherry"], "numbers": (1, 2, 3),
          "unique_numbers": {1, 2, 3}, "data": None,
          "file_data": b"Hello, World!", "byte_array": bytearray(b"Hello"),
          "memory_view": memoryview(b"Hello"), "complex_number": 2 + 3j,
          "range_numbers": range(5)}

print(type(object))