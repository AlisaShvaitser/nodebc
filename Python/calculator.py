print ('Hello world')
# My Start!
from colorama import init
# use Colorama to make Termcolor work on Windows too
init()
from colorama import Fore, Back, Style
print (Back.GREEN)
print (Fore.BLACK)
what = input ('what we do +,- ')
print (Back.CYAN)
a = float (input ( 'first number '))
b = float (input ( 'second number '))
print (Back.YELLOW)
if what == '+':
    c = a + b
    print (str(c))
elif what == '-':
    c = a - b
    print (str(c))
else:
    print ('error')   
input()     