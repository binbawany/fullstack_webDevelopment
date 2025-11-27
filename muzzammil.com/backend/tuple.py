#store multiple items in a single variable.#
#tuple is ordered, unchangeable, and allows duplicate values.#

my_tuple = (1, 2, 3, 4, 5, "apple", "banana", "cherry", 5.98, True, None,("book", "pen", "computer")  )
print("Original Tuple:", my_tuple)

print(len(my_tuple))  # Output: 12
myfruit = tuple(("apple", "banana", "cherry"))  # Creating a tuple using the tuple() constructor
print("Fruit Tuple:", myfruit)

