myCountry = 'I live in "Pakistan"'
print(myCountry)

myName = "waris"
print(myName)

myName2 = ""

print(myName2)

text = """This is a multi-line string.
It can span multiple lines.
You can write paragraphs here."""

print(text)

#string as array

print(myName[0])  # First character
print(len(myName))  # Second character
for char in myName:
    print(char)

print("write" in text)

if "Muzzammil" in myName:
    print("Yes, 'Muzzammil' is found in myName")
else:
    print("No, 'Muzzammil' is not found in myName")



myName2 = "Python Programming"

print(myName2[-11:])  # Slicing from index 0 to 5


myName3 = " Hello, World! "
print(myName3.strip())  # Remove whitespace from both ends

print(myName3.lower())  # Convert to lowercase
print(myName3.upper())  # Convert to uppercase  

print(myName3.replace("H", "J"))  # Replace 'H' with 'J'


p = (myName3.split(","))  # Split the string at each space
print(type(p))


h = "Hello"
w = "World"
greeting = h + " " + w  # Concatenate strings with a space in between
print(greeting)

age = 25
intro = "my age is " + str(age)
print(intro)  # This will raise an error

#formating f-string

introf = f"My name is {myName} and I am {age} years old."
print(introf)
