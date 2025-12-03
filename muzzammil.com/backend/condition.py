#condition if else , elif , nested if else 


a = 40
b = 50
if a > b:
    print("a is greater than b")
elif a == b:
    print("a is equal to b")
    print("b is equal to a")
else:
    print("b is greater than a")


marks = 85
if marks >= 90:
    print("Grade: AA")
elif marks >= 80:
    print("Grade: A+")
elif marks >= 70:
    print("Grade: A")
elif marks >= 60:
    print("Grade: B")
elif marks >= 50:   
    print("Grade: C")
else:
    print("Grade: F")

#nested if else
num = 16
if num > 0:
    if num % 2 == 0:
        print("The number is positive and even.")
    else:
        print("The number is positive and odd.")
else:
    print("The number is not positive.")

#short hand if else
age = 10
print("Adult") if age >= 18 else print("Minor")


#with logicaL operators
x = -100
if x > 0 and x < 50:
    print("x is a positive number less than 50")


if x < 0 or x > 100:
    print("x is either negative or greater than 100")

if not(x >= 0):
    print("x is a negative number")