income = float(input("Enter the annual income: "))

if income <= 85528: tax = (income/100*18) - 556.2
if income > 85528 : tax = (((income-85528)/100*32)+14839.2)
if tax <=0 : tax = 0
tax = round(tax, 0)
print("The tax is:", tax, "thalers")
    