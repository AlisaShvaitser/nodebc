year = int(input("Enter a year: "))
a = year/4
b = year//4
if year > 1582:
    if a == b : print ("Leap year")
    if a != b : print ("Common year")
else:
    print ("Not within the Gregorian calendar period")
    