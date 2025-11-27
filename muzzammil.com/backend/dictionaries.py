#to store multiple items in a single variable.#
#dictionaries are ordered (as of Python 3.7), changeable, and do not allow duplicate keys.#
#key: value pairs.

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print("Original Dictionary:", thisdict)

print(len(thisdict))  # Output: 3
print(thisdict["brand"])  # Accessing value by key