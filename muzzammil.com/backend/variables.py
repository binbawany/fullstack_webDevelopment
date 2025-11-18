#variables, are containing data
# variables are used to store information to be referenced and manipulated in a program

name = 'Muzammil'
age = 25
is_student = True
height = 5.9 

print(name)


# variable naming rules
# 1. Variable names must start with a letter (a-z, A-Z) or an underscore (_)
# 2. The rest of the variable name can contain letters, numbers (0-9), or underscores (_)
# 3. Variable names are case-sensitive (e.g., myVar and myvar are different variables)
# 4. Variable names cannot be a reserved keyword in Python (e.g., if, else, while, for, etc.) 
# 5. Variable names should not contain spaces. Use underscores (_) to separate words (e.g., my_variable)
# 6. Variable names should be descriptive and meaningful to enhance code readability


a, b ,c = 10, 20,30
print(a)


a = b = c = "apple"

print(a)
print(b)
print(c)


# variable types
# 1. int - Integer type, represents whole numbers (e.g., 1, -5, 100)
# 2. float - Floating-point type, represents decimal numbers (e.g., 3.14, -0.5, 2.0)
# 3. str - String type, represents sequences of characters (e.g., "hello", 'Python')
# 4. bool - Boolean type, represents truth values (True or False)


#global vs local variables
global_var = "I am a global variable"
def my_function():
    local_var = "I am a local variable"
    print(local_var)
    print(global_var)