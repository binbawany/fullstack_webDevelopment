#while loop for when condition is true
i = 0
while i < 5:
    print("Iteration:", i)
    i += 1

students = ["Alice", "Bob", "Charlie"]
index = 0
while index < len(students):
    print("Student Name:", students[index])
    index += 1

# Using while loop with dictionary
grades = {"Alice": 90, "Bob": 85, "Charlie": 92}
keys = list(grades.keys())
index = 0
while index < len(keys):
    student = keys[index]
    grade = grades[student]
    print(f"{student}: {grade}")
    index += 1

# Nested while loop
i = 0
while i < 3:
    j = 0
    while j < 2:
        print(f"i: {i}, j: {j}")
        j += 1
    i += 1 

# Using while loop with break and continue
i = 0
while i < 10:
    if i == 5:
        break  # Exit the loop when i is 5
    print(i)
    i += 1

p = 0
while p < 10:
    if p % 2 == 0:
        p += 1
        continue  # Skip even numbers
    print(p)
    p += 1