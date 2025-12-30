#object oriented programming system
#Class, Object, Attributes, methods, Inheritance, Encapsulation, Polymorphism, Abstraction, constructor 

#class is a blueprint for creating objects
#object is an instance of a class
#attributes are the properties/data of an object
#methods are behaviors/functions of an object

#inheritance is a mechanism where a new class inherits properties and behaviors from an existing class child and parent class
#protect data using private variables and methods
#polymorphism is the ability to take many forms method overloading and overriding: same method but diffrent behavior
#abstraction is the process of hiding complex implementation details and showing only the essential features of an object

#contructor is a special method that is called when an object is instantiated

class Employee:
    def __init__(self, emp_id, name, position, salary): #constructor
        self.emp_id = emp_id
        self.name = name
        self.position = position
        self.salary = salary

    def display_info(self): #method
        print(f"Employee ID: {self.emp_id}, Name: {self.name}, Position: {self.position}, Salary: {self.salary}")

class Manager(Employee): #inheritance
    def __init__(self, emp_id, name, position, salary, department):
        super().__init__(emp_id, name, position, salary) #calling parent constructor
        self.__department = department #private attribute

    def display_info(self): #method overriding
        super().display_info()
        print(f"Department: {self.__department}")


#creating objects
emp1 = Employee(101, "Alice", "Developer", 70000) #instance of Employee class
emp1.display_info()
mgr1 = Manager(201, "Bob", "Manager", 90000, "IT") #instance of Manager class
mgr1.display_info()