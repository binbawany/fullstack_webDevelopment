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

from abc import ABC, abstractmethod

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


class Student:
    def __init__(self, student_id, name, major, marks):
        self.student_id = student_id
        self.name = name
        self.major = major
        self.__marks = marks  #private attribute

    def display_info(self):
        print(f"Student ID: {self.student_id}, Name: {self.name}, Major: {self.major}")
    def get_marks(self):  #encapsulation
        return self.__marks
    def set_marks(self, marks):
        self.__marks = marks

class GraduateStudent(Student): #inheritance
    def __init__(self, student_id, name, major, research_topic):
        super().__init__(student_id, name, major)
        self.research_topic = research_topic

    def display_info(self): #method overriding
        super().display_info()
        print(f"Research Topic: {self.research_topic}") 

    #encapsulation
    def set_research_topic(self, topic):
        self.research_topic = topic
    def get_research_topic(self):
        return self.research_topic
    


class Person(ABC): #abstraction
    @abstractmethod
    def get_details(self):
        pass

class Teacher(Person):
    def __init__(self, name, subject):
        self.name = name
        self.subject = subject

    def get_details(self):
        return f"Teacher Name: {self.name}, Subject: {self.subject}"

class StudentPerson(Person):
    def __init__(self, student_id, name, grade):
        self.student_id = student_id
        self.name = name
        self.grade = grade

    def get_details(self):
        return f"Student ID: {self.student_id}, Name: {self.name}, Grade: {self.grade}"