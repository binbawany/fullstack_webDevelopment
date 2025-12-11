#try
#except
#finally
#else
#raise




try:
    result = x = 10 / 0
except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")

y = 5
try:
    print(y)
except NameError:
    print("Error: Variable 'y' is not defined.")
else:
    print("No errors occurred")
finally:
    print("Execution completed.")


g = "-5"
g = int(g)

if g < 0:
    raise ValueError("Negative value error: your input cannot be negative.")
else:
    print("Value is acceptable.")   
