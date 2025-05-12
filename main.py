import sys

operand_1 = input("Enter the first number: ") # "12"
if not operand_1.isdigit(): # True
	print(f"Error: `{operand_1}` is not a number")
	sys.exit(1)
else:
	operand_1 = int(operand_1) # 12

operand_2 = input("Enter the second number: ") # "H"
if not operand_2.isdigit(): # False
	print(f"Error: `{operand_2}` is not a number") # ...
	sys.exit(1)
else:
	operand_2 = int(operand_2)

operators = ["+", "-", "*", "/", "%"]
operator = input("Enter the operator (+, -, *, /, %): ") # "/"
if operator not in operators:
	print("Invalid Operator")
	sys.exit(1)


# calculation
if operator == "+":
	print(f"The result is {operand_1 + operand_2}")
elif operator == "-":
	print(f"The result is {operand_1 - operand_2}")
elif operator == "*":
	print(f"The result is {operand_1 * operand_2}")
elif operator == "/":
	if operand_2 == 0: # False
		print("Error: Division by 0 is not allowed")
	else:
		print(f"The result is {operand_1 // operand_2}") 
else:
	if operand_2 == 0:
		print("Error: Modulo by 0 is not allowed")
	else:
		print(f"The result is {operand_1 % operand_2}")


