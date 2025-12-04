#function is a block of reusable code that performs a specific task
#it runs when it is called

def my_first_function():
    return "this is my first function"

print(my_first_function())

my_first_function()


my_first_function()

def my_function():
    pass

my_function()

def greet(name):
    print(f"hello {name}")

greet("muzzammil")
greet("waris")
greet("ali")

#argument is a information that is passed into a function
#argument vs parameter
#parameter is the variable listed inside the parentheses in the function definition
#argument is the value that is sent to the function when it is called


#default parameter
def greet(name="guest"):
    print(f"hello {name}")

greet()
greet("muzzammil")

#this is key value argument
def my_pet(pet_name, pet_type="cat"):
    print(f"i have a {pet_type} named {pet_name}")

my_pet("fluffy")
my_pet("mitho", "parrot")

#positional argument
def my_pet2(pet_name, pet_type):
    print(f"i have a {pet_type} named {pet_name}")

my_pet2("dog", "bruno")
my_pet2(pet_type="bruno", pet_name="dog") #this will give wrong output because of positional argument, in this case we redefine here 

#Arbitrary Arguments *args
def my_friends(*friends):
    print("my friends are:")
    for friend in friends:
        print(friend)


my_friends("ali", "umer", "ahmed", "saad", "hamza")


def my_freind_circle(greeting, *friends):
    for friend in friends:
        print(f"{greeting}, {friend} in my circle")


my_freind_circle("salam", "ali", "umer", "ahmed")


def loop_function(*numbers):
    total = 0
    for num in numbers:
        total += num 
    return total

print(loop_function(10,20,30,40,50))


#arbitrary keyword arguments **kwargs

def my_details(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

my_details(name="muzzammil", age=25, city="karachi")

#function scope
x = 10  #global variable
def my_scope():
    global y 
    y = 5  #local variable
    print(f"inside function: x={x}, y={y}")

my_scope()
print(y)

def outer_function():
    outer_var = "i am outside!"
    
    def inner_function():
        inner_var = "i am inside!"
        print(outer_var)
        print(inner_var)
    
    inner_function()

outer_function()


#nonlocal keyword, for the variables bolongs outer function

def outer():
    var = "outer variable"
    
    def inner():
        nonlocal var
        var = "inner variable"
        print("inner:", var)
    
    inner()
    print("outer:", var)

outer()

#LEGB rule Local, Enclosing, Global, Built-in
x = "global x"
def outer_func():
    x = "enclosing x"
    
    def inner_func():
        x = "local x"
        print(x)
    
    inner_func()
    print(x)

outer_func()
print(x)


#Decorators
#a decorator is a function that takes another function as an argument, 
# extends its behavior without modifying it, and returns a new function

def change_case(func):
   def inner():
    return func().upper()
   return inner

@change_case #decorator syntax
def say_hello():
    return "hello world"

print(say_hello())


#Lambda Functions
#anonymous function
#used for short period of time

add = lambda a, b: a + b
print(add(5, 10))

def mymath(n):
    return lambda a: a * n

double = mymath(2)
print(double(10))

#recursive function

def countdown(n):
    if n <= 0:
        print("blastoff!")
    else:
        print(n)
        countdown(n-1)

countdown(5)

#Generators
#generators are functions that return an iterable set of items,
#one at a time, in a special way using the yield keyword
#pause and resume their state between each item

def my_generator():
    yield 1
    yield 2
    yield 3

for value in my_generator():
    print(value)