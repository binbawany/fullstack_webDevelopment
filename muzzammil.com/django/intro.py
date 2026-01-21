#Django is backend web framework
#framework is collection of libraries and modules that helps us to build web applications
#Django is written in python programming language
#Django follows the model-view-controller (MVC) architectural pattern
#In Django, the model represents the data and the business logic of the application
#The view is responsible for rendering the user interface and handling user input
#The controller manages the flow of data between the model and the view
#Django provides a lot of built-in features such as authentication, database management, and templating
#Django is known for its "batteries included" philosophy, which means that it comes with a lot of pre-built functionality out of the box
#Django is also highly customizable, allowing developers to build complex web applications quickly and efficiently
#Overall, Django is a powerful and popular web framework that is widely used by developers around the world to build web applications of all kinds.

print("Hello, welcome to Django introduction!")

#why we need virtual environment in django?
#A virtual environment is a self-contained directory that contains all the necessary files and packages required to run a Python project
#When working with Django, it is important to use a virtual environment for several reasons:
#1. Dependency management: Django projects often require specific versions of packages and libraries to function properly. By using a virtual environment, you can isolate the dependencies of your project from the global Python environment, ensuring that your project has access to the correct versions of packages without conflicts.
#2. Project isolation: Each Django project may have different requirements and dependencies. Using a virtual environment allows you to create a separate environment for each project, preventing conflicts between different projects and ensuring that each project has its own set of packages and configurations.
#3. Easy deployment: When deploying a Django project to a production server, it is important to have a consistent environment that matches the development environment. By using a virtual environment, you can easily recreate the same environment on the production server, ensuring that your project runs smoothly.
#4. Cleaner development environment: Using a virtual environment helps to keep your global Python environment clean and organized. You can avoid cluttering your global environment with unnecessary packages and dependencies that are only needed for specific projects.
#Overall, using a virtual environment is a best practice when working with Django projects, as it helps to manage dependencies, isolate projects, simplify deployment, and maintain a clean development environment.

#denv/Scripts/activate.bat (windows)
#source denv/bin/activate (linux)

#127.0.0.1:8000 -> browser requests -> Django development server -> Django application -> Database (if needed) -> Django application -> Django development server -> browser response
#http request -> response cycle in django
#HTTP is stand for Hypertext Transfer Protocol
#HTTP is a protocol used for communication between web servers and clients (browsers)
