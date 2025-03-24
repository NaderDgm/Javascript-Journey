'''class Vehicle:
    def description(self):
        return "This is a sayara."

class Car(Vehicle):
    def description(self):
        return "a car"

class Bicycle(Vehicle):
    def description(self):
        return "a bicycle."

car = Car()
bicycle = Bicycle()
print(car.description()) 
print(bicycle.description())



class Calculator:
    # def calculate(self, num1, num2):
    #     return num1 + num2

    # Surcharge #
    def calculate(self, num1, num2, num3=None):
        if num3 is None:
            return num1 + num2
        else:
            return num1 + num2 + num3

calc = Calculator()
print(calc.calculate(5, 3))
print(calc.calculate(5, 3, 2))'''
'''=========================