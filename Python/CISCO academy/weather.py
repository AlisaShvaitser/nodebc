import pyowm
owm = pyowm.OWM('8155a42c57d88d6a6d7e95914b14516d') 
place = input ('What city are you in? ')
observation = owm.weather_at_place(place)
w = observation.get_weather()
temp = w.get_temperature ('celsius') ['temp']
print ('in ' + place + ' now is ' + w.get_detailed_status())
print('temperature is ' + str(temp))
if temp > 15:
    print ('You need jacket') 
else:
    print ('Good weather!')    
input()
