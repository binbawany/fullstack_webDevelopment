import math

print("what is you name?: ")
name = input()
print(f"Hello, {name}!")

father_name = input("What is your father's name?: ")
print(f"Hello, Mr. {father_name}!")


fav_book = input("What is your favorite book?: ")
fav2_book = input("What is your second favorite book?: ")
fav3_book = input("What is your third favorite book?: ")
print(f"Do you know? Your favorite books are {fav_book}, {fav2_book}, and {fav3_book}!")

try:
    x = input("Enter a number to squareroot: ")
    x = int(x)
    if x < 0 or x == 0 or x is None or x == 1:
        raise ValueError("The value must be greater than one.")
    else:
        x = math.sqrt(x)
        x = round(x)
        print(f"The square root of your number is: {x}")
except ValueError as ve:
    print(f"ValueError: {ve}")


