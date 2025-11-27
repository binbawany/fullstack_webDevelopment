#airthmatic operators
#assignment operators
#comparison operators
#logical operators
#bitwise operators
#identity operators
#membership operators

# Arithmetic Operators
a = 10
b = 3
print("Addition:", a + b)          # 13
print("Subtraction:", a - b)       # 7
print("Multiplication:", a * b)    # 30
print("Division:", a / b)          # 3.333333333333
print("Floor Division:", a // b)   # 3
print("Modulus:", a % b)           # 1
print("Exponentiation:", a ** b)   # 1000

# Assignment Operators
c = 5
d = 8
c += d  # c = c + d 13
c -= d  # c = c - d 5
c *= d  # c = c * d 40
c /= d  # c = c / d 5.0
c %= d  # c = c % d 5.0
print("c after operations:", c)


f = 10
g = 7
f %= g  # f = f % g
print("f after modulus operation:", f)  # 7

# Comparison Operators
x = 15
y = 20
print("Equal:", x == y)              # False
print("Not Equal:", x != y)          # True
print("Greater Than:", x > y)        # False
print("Less Than:", x < y)           # True
print("Greater Than or Equal To:", x >= y)  # False
print("Less Than or Equal To:", x <= y)     # True

# Logical Operators
p = True
q = False
print("AND:", p and q)  # False
print("OR:", p or q)    # True
print("NOT p:", not p)  # False
print("NOT q:", not q)  # True

# Bitwise Operators
m = 5  # 0101 in binary
n = 3  # 0011 in binary
print("Bitwise AND:", m & n)  # 1 (0001 in binary
print("Bitwise OR:", m | n)   # 7 (0111 in binary)

# Identity Operators
list1 = [1, 2, 3]
list2 = list1
list3 = [1, 2, 3]
print("list1 is list2:", list1 is list2)  # True
print("list1 is list3:", list1 is list3)  # False
print("list1 is not list3:", list1 is not list3)  # True